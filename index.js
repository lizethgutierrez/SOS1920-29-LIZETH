const express = require("express");

const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 80;

app.use("/",express.static("./public"));

var womanresearchers_stats = [
	{ 
		country: "Croatia",
		year: 2013,
		womanresearchers_he: 3405,
		womanresearchers_gov: 1439,
		womanresearchers_bent:489
	},
	{ 
		country: "Croatia",
		year: 2014,
		womanresearchers_he: 3397,
		womanresearchers_he: 1352,
		womanresearchers_bent:497
	},
	{ 
		country: "Croatia",
		year: 2015,
		womanresearchers_he: 3582,
		womanresearchers_gov: 1297,
		womanresearchers_bent:545
	},
	{ 
		country: "Czechia",
		year: 2013,
		womanresearchers_he: 8166,
		womanresearchers_gov: 3633,
		womanresearchers_bent:2662
	},
	{ 
		country: "Czechia",
		year: 2014,
		womanresearchers_he: 8115,
		womanresearchers_gov: 3625,
		womanresearchers_bent:2975
	},
	{ 
		country: "Czechia",
		year: 2015,
		womanresearchers_he: 8427,
		womanresearchers_gov: 3847,
		womanresearchers_bent:2887
	},
	{ 
		country: "Finland",
		year: 2013,
		womanresearchers_he: 10488,
		womanresearchers_gov: 2543,
		womanresearchers_bent:4465
	},
	{ 
		country: "Finland",
		year: 2014,
		womanresearchers_he: 10601,
		womanresearchers_gov: 2274,
		womanresearchers_bent:4540
	},
	{ 
		country: "Finland",
		year: 2015,
		womanresearchers_he: 10583,
		womanresearchers_gov: 2160,
		womanresearchers_bent:4849
	},
	{ 
		country: "Italy",
		year: 2013,
		womanresearchers_he: 31325,
		womanresearchers_gov: 12843,
		womanresearchers_bent:11315
	},
	{ 
		country: "Italy",
		year: 2014,
		womanresearchers_he: 31949,
		womanresearchers_gov: 13276,
		womanresearchers_bent:12106
	},	
	{ 
		country: "Italy",
		year: 2015,
		womanresearchers_he: 31198,
		womanresearchers_gov: 13838,
		womanresearchers_bent:14337
	},
	{ 
		country: "Lithuania",
		year: 2013,
		womanresearchers_he: 7632,
		womanresearchers_gov: 871,
		womanresearchers_bent:760
	},
	{ 
		country: "Lithuania",
		year: 2014,
		womanresearchers_he: 7494,
		womanresearchers_gov: 928,
		womanresearchers_bent:1312
	},
	{ 
		country: "Lithuania",
		year: 2015,
		womanresearchers_he: 6991,
		womanresearchers_gov: 963,
		womanresearchers_bent:821
	},
	{ 
		country: "Malta",
		year: 2013,
		womanresearchers_he: 266,
		womanresearchers_gov: 8,
		womanresearchers_bent:146
	},
	{ 
		country: "Malta",
		year: 2014,
		womanresearchers_he: 292,
		womanresearchers_gov: 9,
		womanresearchers_bent:109
	},
	{ 
		country: "Malta",
		year: 2015,
		womanresearchers_he: 286,
		womanresearchers_gov: 9,
		womanresearchers_bent:108
	},
	{ 
		country: "Portugal",
		year: 2013,
		womanresearchers_he: 25568,
		womanresearchers_gov: 6597,
		womanresearchers_bent:7223
	},
	{ 
		country: "Portugal",
		year: 2014,
		womanresearchers_he: 24958,
		womanresearchers_gov: 6718,
		womanresearchers_bent:9628
	},
	{ 
		country: "Portugal",
		year: 2015,
		womanresearchers_he: 25428,
		womanresearchers_gov: 6469,
		womanresearchers_bent:7319
	},
	{ 
		country: "Spain",
		year: 2013,
		womanresearchers_he: 48723,
		womanresearchers_gov: 15115,
		womanresearchers_bent:18060
	},
	{ 
		country: "Spain",
		year: 2014,
		womanresearchers_he: 49708,
		womanresearchers_gov: 15094,
		womanresearchers_bent:18141
	},
	{ 
		country: "Spain",
		year: 2015,
		womanresearchers_he: 50782,
		womanresearchers_gov: 16257,
		womanresearchers_bent:18469
	}
];

const BASE_API_URL = "/api/v1";

//load initial data
app.get(BASE_API_URL+"/womanresearchers_stats/loadInitialData", (req, res) =>{
	res.send(JSON.stringify(womanresearchers_stats,null,2));
	res.sendStatus(200,"OK");
});


// GET womanresearchers
app.get(BASE_API_URL+"/womanresearchers_stats", (req,res) =>{
	res.send(JSON.stringify(womanresearchers_stats,null,2));
	console.log("Data sent:"+JSON.stringify(womanresearchers_stats,null,2));
});

// POST womanresearchers
app.post(BASE_API_URL+"/womanresearchers_stats", (req,res) =>{
	var newWoman = req.body;
	
	var filteredwomanresearchers = womanresearchers_stats.filter((c) => {
			return ( (c.country == newWoman.country && c.year == newWoman.year));
		});
	
	if(newWoman == "" || newWoman.country == null || newWoman.year == null ){
		res.sendStatus(400,"BAD REQUEST");
	} 
	else if(filteredwomanresearchers.length > 0){
			res.sendStatus(409, "CONFLICT");
	}
	else{
			womanresearchers_stats.push(newWoman);
			res.sendStatus(201,"CREATED");
		
	}
});


// DELETE womanresearchers
app.delete(BASE_API_URL+"/womanresearchers_stats",(req,res)=>{
	var filteredwomanresearchers = womanresearchers_stats.filter((c) => {
		return (0);
	});
		womanresearchers_stats = filteredwomanresearchers;
		res.sendStatus(200,"OK");
	
});

// PUT womanresearchers NO SE PERMITE
app.put(BASE_API_URL+"/womanresearchers_stats",(req,res) =>{
	res.sendStatus(405, "METHOD NOT ALLOWED")
});


// GET womanresearchers/XXX
app.get(BASE_API_URL+"/womanresearchers_stats/:country/:year", (req,res)=>{
	var country = req.params.country;
	var year = req.params.year;
	
	var filteredwomanresearchers = womanresearchers_stats.filter((c) => {
		return (c.country == country && c.year == year );
	});
	if(filteredwomanresearchers.length >= 1){
		res.send(filteredwomanresearchers[0]);
		
	}else{
		res.sendStatus(404,"NOT FOUND");
	}
});

//POST womanresearchers/XXX NO SE PERMITE

app.post(BASE_API_URL+"/womanresearchers_stats/:country/:year",(req,res) =>{
	res.sendStatus(405, "METHOD NOT ALLOWED")
});


// PUT womanresearchers/XXX
app.put(BASE_API_URL+"/womanresearchers_stats/:country/:year", (req,res)=>{
	var country = req.params.country;
	var year = req.params.year;
	
	var newWomanResearchers= req.body;
	
	var filteredwomanresearchers = womanresearchers_stats.filter((c) => {
		return (c.country == country && c.year== year);
	});
	if(newWomanResearchers.country != country && newWomanResearchers.year != year){
		
		res.sendStatus(409,"CONFLICT");
		
	}else{
		filteredwomanresearchers[0].country= newWomanResearchers.country;
		filteredwomanresearchers[0].year= newWomanResearchers.year;
		filteredwomanresearchers[0].womanresearchers_he= newWomanResearchers.womanresearchers_he;
		filteredwomanresearchers[0].womanresearchers_gov= newWomanResearchers.womanresearchers_gov;
		filteredwomanresearchers[0].womanresearchers_bent= newWomanResearchers.womanresearchers_bent;
		
		res.sendStatus(200,"OK");
		
	}
});

// DELETE womanresearchers/XXX
app.delete(BASE_API_URL+"/womanresearchers_stats/:country/:year", (req,res)=>{
	var country = req.params.country;
	var year = req.params.year;


	var filteredwomanresearchers = womanresearchers_stats.filter((c) => {
		return (c.country != country || c.year !=year);
	});
	if(filteredwomanresearchers.length < womanresearchers_stats.length){
		womanresearchers_stats = filteredwomanresearchers;
		
		res.sendStatus(200,"OK");
	}else{
		res.sendStatus(404,"NOT FOUND");
	}
});



app.listen(port, () => {
console.log("Server ready");
});
console.log("Starting server...");