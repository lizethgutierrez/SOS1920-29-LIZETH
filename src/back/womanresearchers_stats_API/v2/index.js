module.exports = function(app){
	const dataStore= require("nedb");
	const path = require("path");
	const dbFileName= path.join(__dirname,"womanresearchers_stats.db");
	
	const BASE_API_URL = "/api/v2";
	
	const db = new dataStore({
		filename: dbFileName,
		autoload: true	
	});

	
var initialwomanresearchers_stats = [
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
];;




//load initial data
app.get(BASE_API_URL+"/womanresearchers-stats/loadInitialData", (req, res) =>{
	db.insert(initialwomanresearchers_stats);
	res.sendStatus(200,"OK");
	console.log("Initial Woman Researchers  loaded; "+JSON.stringify(initialwomanresearchers_stats,null,2));


});


// GET womanresearchers
app.get(BASE_API_URL+"/womanresearchers-stats", (req,res) =>{
	var query = {};
	
	//let error400 = false;
		
    let offset = 0;
    let limit = Number.MAX_SAFE_INTEGER;
		
    if (req.query.offset) {
		offset = parseInt(req.query.offset);
        delete req.query.offset;
    }
    if (req.query.limit) {
        limit = parseInt(req.query.limit);
        delete req.query.limit;
    }
	console.log("New GET .../womanresearchers-stats");
	if(req.query.country){query["country"] = req.query.country;} 
	if(req.query.year){query["year"] = parseInt(req.query.year);}
	if(req.query.womanresearchers_he){query["womanresearchers_he"] = parseInt(req.query.womanresearchers_he);}
	if(req.query.womanresearchers_gov){query["womanresearchers_gov"] = parseInt(req.query.womanresearchers_gov);}
	if(req.query.womanresearchers_bent){query["womanresearchers_bent"] = parseInt(req.query.womanresearchers_bent);}
		
		db.find(query).sort({country:1, year:-1}).skip(offset).limit(limit).exec((err, womanresearchers) => {
			womanresearchers.forEach( (woman) => {
				delete woman._id;
			});
			res.send(JSON.stringify(womanresearchers,null,2));
			console.log("Data sent:"+JSON.stringify(womanresearchers,null,2));
		
		/*	if(womanresearchers.length!=1) {
				res.send(JSON.stringify(womanresearchers,null,2));
				console.log("Data sent:"+JSON.stringify(womanresearchers,null,2));
			} else if(womanresearchers.length==0){
				res.sendStatus(409, "GIVEN DATA ALREADY EXISTS");
			}else {
				res.send(JSON.stringify(womanresearchers[0],null,2));
				console.log("Data sent:"+JSON.stringify(womanresearchers[0],null,2));
			}
*/

		})
	
	
});

// POST womanresearchers
app.post(BASE_API_URL+"/womanresearchers-stats", (req,res) =>{
	var newWoman = req.body;
	
	
	if(newWoman == "" || newWoman.country == null || newWoman.year == null || newWoman.womanresearchers_he == null|| newWoman.womanresearchers_gov==null || newWoman.womanresearchers_bent==null || Object.keys(newWoman).length!=5 ){
		res.sendStatus(400,"BAD REQUEST,ERROR IN DATA");
		console.log("INCORRECT FORMAT");
	} 
	else{
		db.find({country: newWoman.country, year: newWoman.year},(err, womanresearchers) =>{
			
			 if(womanresearchers.length > 0){
				res.sendStatus(409, "GIVEN DATA ALREADY EXISTS");
			}
			else{
				db.insert(newWoman);
				res.sendStatus(201,"CREATED SUCCESSFULLY");
			}
		});
		
	}
	
	
});


// DELETE womanresearchers
app.delete(BASE_API_URL+"/womanresearchers-stats",(req,res)=>{
	console.log("New DELETE .../womanresearchers-stats");

	db.remove({}, {multi:true}, (err, womanresearchers) => {
			console.log("DATA DELETED");
	});
	res.sendStatus(200,"OK");
	
});

// PUT womanresearchers NO SE PERMITE
app.put(BASE_API_URL+"/womanresearchers-stats",(req,res) =>{
	res.sendStatus(405, "METHOD NOT ALLOWED")
});


// GET womanresearchers/XXX
app.get(BASE_API_URL+"/womanresearchers-stats/:country/:year", (req,res)=>{
	var country = req.params.country;
	var year = req.params.year;
	
	
	db.find({country:country, year:parseInt(year)}, (err, womanresearchers) => {
			
			if(womanresearchers.length >= 1) {
				
				womanresearchers.forEach( (t) => {
					delete t._id;
				});
				
				res.send(JSON.stringify(womanresearchers,null,2));
				console.log("Data sent:"+JSON.stringify(womanresearchers,null,2));
				
			}else {
				res.sendStatus(404, "NOT FOUND");
			}
	});
});

//POST womanresearchers/XXX NO SE PERMITE

app.post(BASE_API_URL+"/womanresearchers-stats/:country/:year",(req,res) =>{
	res.sendStatus(405, "METHOD NOT ALLOWED")
});


// PUT womanresearchers/XXX
app.put(BASE_API_URL+"/womanresearchers-stats/:country/:year", (req,res)=>{
	var country = req.params.country;
	var year = req.params.year;
	
	var newWomanResearchers= req.body;
	
	
	 if(newWomanResearchers.country==null || newWomanResearchers.year==null || newWomanResearchers.womanresearchers_he==null || newWomanResearchers.womanresearchers_gov==null || newWomanResearchers.womanresearchers_bent==null|| Object.keys(newWomanResearchers).length!=5 || newWomanResearchers.country!=country || newWomanResearchers.year!=year) {
				res.sendStatus(400,"BAD REQUEST,ERROR IN DATA");
				console.log("INCORRECT FORMAT");
	}else{
	db.find({country:country, year:parseInt(year)}, (err, womanresearchers) => {
		
		if(womanresearchers.length >= 1) {
			db.update({country:country,year:parseInt(year)}, {$set:newWomanResearchers});
				res.sendStatus(200,"OK");
				console.log("DATA UPLOADED");
		}
		else{
			res.sendStatus(404, "NOT FOUND");
				console.log("DATA NOT FOUND");
		}
	});
	}
	
});

// DELETE womanresearchers/XXX
app.delete(BASE_API_URL+"/womanresearchers-stats/:country/:year", (req,res)=>{
	var country = req.params.country;
	var year = req.params.year;


	db.find({country:country, year:parseInt(year)}, (err, womanresearchers) => {
		if(womanresearchers.length >= 1) {
			db.remove({country:country,year:parseInt(year)}, {}, (err, womanresearchers) => {
				console.log("DATA:  " + country + ", " + parseInt(year) + " DELETED");
			});
			res.sendStatus(200,"OK");	
		}else {
			res.sendStatus(404, "NOT FOUND");
		}
	});
});



	

};