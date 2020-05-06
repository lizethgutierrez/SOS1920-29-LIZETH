module.exports = function (app){
	
	console.log("Registering emp_stats_API...");
	const dataStore = require("nedb");
	const path = require("path");
	
    const dbFileName = path.join(__dirname,"emp-stats.db");
    const BASE_API_URL = "/api/v1";
	
	const db = new dataStore({
		
		filename: dbFileName,
		autoload: true
    });

    // *****************API ENRIQUE***************************************************

    var emp_stats = [];

    var stat1 = new Object({ country: "Spain", 
                                year: 2013, 
                                emp_female_age15_24: 16.079, 
                                emp_male_age15_24: 17.332, 	
                                emp_vuln_female: 9.692, 
                                emp_vuln_male: 15.328
                            });
        
    var stat2 = new Object({ country: "Spain", 
                                year: 2014, 
                                emp_female_age15_24: 15.92, 
                                emp_male_age15_24: 17.397, 	
                                emp_vuln_female: 9.482, 
                                emp_vuln_male: 15.062
                            });
        
    var stat3 = new Object({ country: "Spain", 
                                year: 2015, 
                                emp_female_age15_24: 17.289, 
                                emp_male_age15_24: 18.577, 	
                                emp_vuln_female: 9.51, 
                                emp_vuln_male: 14.616
                            });
        
    var stat4 = new Object({ country: "Italy", 
                                year: 2013, 
                                emp_female_age15_24: 13.441, 
                                emp_male_age15_24: 18.714, 
                                emp_vuln_female: 14.141, 
                                emp_vuln_male: 20.573
                            });
        
    var stat5 = new Object({ country: "Italy", 
                                year: 2014, 
                                emp_female_age15_24: 12.547, 
                                emp_male_age15_24: 18.196, 
                                emp_vuln_female: 14.691, 
                                emp_vuln_male: 20.492
                            });
        
    var stat6 = new Object({ country: "Italy", 
                                year: 2015, 
                                emp_female_age15_24: 12.276, 
                                emp_male_age15_24: 18.638, 
                                emp_vuln_female: 14.221, 
                                emp_vuln_male: 20.267
                            });
        
    var stat7 = new Object({ country: "Czechia", 
                                year: 2013, 
                                emp_female_age15_24: 20.835, 
                                emp_male_age15_24: 29.927, 
                                emp_vuln_female: 11.624, 
                                emp_vuln_male: 16.705
                            });
        
    var stat8 = new Object({ country: "Czechia", 
                                year: 2014, 
                                emp_female_age15_24: 21.561, 
                                emp_male_age15_24: 32.336, 
                                emp_vuln_female: 11.191, 
                                emp_vuln_male: 17.095
                            });
        
    var stat9 = new Object({ country: "Czechia", 
                                year: 2015, 
                                emp_female_age15_24: 23.59, 
                                emp_male_age15_24: 33.133, 
                                emp_vuln_female: 10.918, 
                                emp_vuln_male: 16.066
                            });
        
    var stat10 = new Object({ country: "Finland", 
                                year: 2013, 
                                emp_female_age15_24: 44.203, 
                                emp_male_age15_24: 39.12, 	
                                emp_vuln_female: 6.966, 
                                emp_vuln_male: 11.736
                            });
        
    var stat11 = new Object({ country: "Finland", 
                                year: 2014, 
                                emp_female_age15_24: 23.438, 
                                emp_male_age15_24: 39.773, 	
                                emp_vuln_female: 7.368, 
                                emp_vuln_male: 12.043
                            });
        
    var stat12 = new Object({ country: "Finland", 
                                year: 2015, 
                                emp_female_age15_24: 43.136, 
                                emp_male_age15_24: 38.142, 	
                                emp_vuln_female: 7.311, 
                                emp_vuln_male: 12.512
                            });
        
    var stat13 = new Object({ country: "Portugal", 
                                year: 2013, 
                                emp_female_age15_24: 20.172, 
                                emp_male_age15_24: 22.909, 	
                                emp_vuln_female: 14.151, 
                                emp_vuln_male: 19.106
                            });
        
    var stat14 = new Object({ country: "Portugal", 
                                year: 2014, 
                                emp_female_age15_24: 21.682, 
                                emp_male_age15_24: 22.873, 	
                                emp_vuln_female: 11.754, 
                                emp_vuln_male: 17.166
                            });
        
    var stat15 = new Object({ country: "Portugal", 
                                year: 2015, 
                                emp_female_age15_24: 21.592, 
                                emp_male_age15_24: 24.092, 	
                                emp_vuln_female: 11.068, 
                                emp_vuln_male: 16.037
                            });
        
    var stat16 = new Object({ country: "Lithuania", 
                                year: 2013, 
                                emp_female_age15_24: 21.347, 
                                emp_male_age15_24: 27.553, 	
                                emp_vuln_female: 8.442, 
                                emp_vuln_male: 10.741
                            });
        
    var stat17 = new Object({ country: "Lithuania", 
                                year: 2014, 
                                emp_female_age15_24: 23.863, 
                                emp_male_age15_24: 31.013, 	
                                emp_vuln_female: 8.934, 
                                emp_vuln_male: 10.733
                            });
        
    var stat18 = new Object({ country: "Lithuania", 
                                year: 2015, 
                                emp_female_age15_24: 25.676, 
                                emp_male_age15_24: 30.841, 	
                                emp_vuln_female: 8.695, 
                                emp_vuln_male: 11.325
                            });
        
    var stat19 = new Object({ country: "Croatia", 
                                year: 2013, 
                                emp_female_age15_24: 12.438, 
                                emp_male_age15_24: 17.375, 	
                                emp_vuln_female: 13.013, 
                                emp_vuln_male: 14.273
                            });
        
    var stat20 = new Object({ country: "Croatia", 
                                year: 2014, 
                                emp_female_age15_24: 13.305, 
                                emp_male_age15_24: 21.213, 	
                                emp_vuln_female: 9.252, 
                                emp_vuln_male: 11.36
                            });
        
    var stat21 = new Object({ country: "Croatia", 
                                year: 2015, 
                                emp_female_age15_24: 15.64, 
                                emp_male_age15_24: 22.376, 	
                                emp_vuln_female: 9.092, 
                                emp_vuln_male: 11.65
                            });
        
    var stat22 = new Object({ country: "Malta", 
                                year: 2013, 
                                emp_female_age15_24: 43.986, 
                                emp_male_age15_24: 48.23, 	
                                emp_vuln_female: 4.796, 
                                emp_vuln_male: 12.186
                            });
        
    var stat23 = new Object({ country: "Malta", 
                                year: 2014, 
                                emp_female_age15_24: 46.572, 
                                emp_male_age15_24: 46.136, 	
                                emp_vuln_female: 5.292, 
                                emp_vuln_male: 11.995
                            });
        
    var stat24 = new Object({ country: "Malta", 
                                year: 2015, 
                                emp_female_age15_24: 45.336, 
                                emp_male_age15_24: 46.61, 	
                                emp_vuln_female: 5.151, 
                                emp_vuln_male: 12.199
                            });
        
    emp_stats.push(stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9, stat10, 
                stat11, stat12, stat13, stat14, stat15, stat16, stat17, stat18, stat19, 
                stat20, stat21, stat22, stat23, stat24);

    db.find({}, (err,emp_stats)=>{
        if(emp_stats.length == 0){
            db.insert([{ country: "Malta", year: 2017, emp_female_age15_24: 10, emp_male_age15_24: 20, 
                        emp_vuln_female: 30, emp_vuln_male: 40},
                        { country: "Spain", year: 2012, emp_female_age15_24: 90, emp_male_age15_24: 80, 
                        emp_vuln_female: 70, emp_vuln_male: 60},
                        ]);
            console.log("EMPTY DB! Inserted 2 default resources");
        }else{
            console.log("Loaded DB with "+emp_stats.length+" contacts");
        }
        });

    //GET EMP_STATS/LOADINITIALDATA (CARGO TODOS LOS RECURSOS)

    app.get(BASE_API_URL+"/emp-stats/loadInitialData", (req,res) =>{
        
        console.log("New GET .../loadInitialData");
        
        db.insert(emp_stats);
		res.sendStatus(201);
		
		console.log("Initial resources loaded: " + JSON.stringify(emp_stats,null,2));
        
    });

    //GET EMP_STATS (OBTENGO TODOS LOS RECURSOS)

    app.get(BASE_API_URL+"/emp-stats", (req,res) =>{

        console.log("New GET .../emp-stats");

        //Implementación de paginación
        var limit = parseInt(req.query.limit);
        var offset = parseInt(req.query.offset);

        //Implementación de las búsquedas
        var emp_find = new Object();
        var data = req.query;
        console.log("req.query: " + JSON.stringify(data,null,2));

        if(!(limit && offset) && data){
            
            if(data.country){
                var country = data.country;
                emp_find.country = country;
                //console.log("country: " + country);
                //console.log("emp_find: " + JSON.stringify(emp_find,null,2));
            
            }if(data.year){
                var year = parseInt(data.year);
                emp_find.year = year;
                //console.log(JSON.stringify(emp_find,null,2));
            
            }if(data.emp_female_age15_24){
                var emp_female_age15_24 = parseFloat(data.emp_female_age15_24);
                emp_find.emp_female_age15_24 = emp_female_age15_24;

            }if(data.emp_male_age15_24){
                var emp_male_age15_24 = parseFloat(data.emp_male_age15_24);
                emp_find.emp_male_age15_24 = emp_male_age15_24;
            
            }if(data.emp_vuln_female){
                var emp_vuln_female = parseFloat(data.emp_vuln_female);
                emp_find.emp_vuln_female = emp_vuln_female;
            
            }if(data.emp_vuln_male){
                var emp_vuln_male = parseFloat(data.emp_vuln_male)
                emp_find.emp_vuln_male = emp_vuln_male;
            }

            db.find(emp_find, (err, emp_stats) =>{
                
                if(err) {
                    console.log("database error: " + err);
                
                }else{
                    emp_stats.forEach( (e) => {
                        delete e._id;
                                            
                    });

                    res.send(JSON.stringify(emp_stats,null,2));
                    
                }
            });    
        
        }else if(!data){
            
            db.find({}, (err, emp_stats) =>{
                
                if(err) {
                    console.log("database error: " + err);
                
                }else{
                    emp_stats.forEach( (e) => {
                        delete e._id;
            
                    });

                    res.send(JSON.stringify(emp_stats,null,2));
                    
                }
            });

        }else if(limit && offset){
    
            db.find({}).skip(offset).limit(limit).exec((err, emp_stats) =>{
                
                if(err) {
                    console.log("database error: " + err);
                
                }else{
                    emp_stats.forEach( (e) => {
                        delete e._id;
            
                    });

                    res.send(JSON.stringify(emp_stats,null,2));
                }
            });
        }
        
    });

    //GET EMP_STATS/COUNTRY/YEAR (OBTENGO UN RECURSO ESPECÍFICO)

    app.get(BASE_API_URL+"/emp-stats/:country/:year", (req,res) =>{

        console.log("New GET .../emp-stats/country/year");

        var country = req.params.country;
        var year = parseInt(req.params.year);
        
        db.find({"country": country, "year": year}, (err, emp_stats) => {

            if(err) {
                console.log("database error: " + err);  
            
            }else if(!emp_stats.length == 0){
                emp_stats.forEach( (e) => {
                    delete e._id;
                });
                var resource = emp_stats[0];
                res.send(JSON.stringify(resource,null,2));
                
            }else if(emp_stats.length == 0){
                res.sendStatus(404, "RESOURCE NOT FOUND");
            }          
        });
    });

    //GET EMP_STATS/XXX (OBTENGO UN RECURSO ESPECÍFICO (PAÍSES O AÑOS) SEGÚN EL PARÁMETRO DE LA RUTA)

    app.get(BASE_API_URL+"/emp-stats/:resource", (req,res) =>{

        console.log("New GET .../emp-stats/resource");
        
        var resource = parseInt(req.params.resource); 

        if(Number.isNaN(resource)){
           
            var country = req.params.resource;
            //console.log(country);
            db.find({"country": country}, (err, emp_stats) => {

                if(err) {
                    console.log("database error: " + err);  
                
                }else if(!emp_stats.length == 0){
                    emp_stats.forEach( (e) => {
                        delete e._id;
                    });
                    
                    res.send(JSON.stringify(emp_stats,null,2));
                
                }else if(emp_stats.length == 0){
                    res.sendStatus(404, "RESOURCE NOT FOUND");
                }          
            });
        
        }else{
            
            var year = resource;
            //console.log(year);
            db.find({"year": year}, (err, emp_stats) => {

                if(err) {
                    console.log("database error: " + err);  
                
                }else if(!emp_stats.length == 0){
                    emp_stats.forEach( (e) => {
                        delete e._id;
                    });
                    
                    res.send(JSON.stringify(emp_stats,null,2));
                
                }else if(emp_stats.length == 0){
                    res.sendStatus(404, "RESOURCE NOT FOUND");
                }          
            });
        }
        
    });
        
    //POST EMP_STATS (CREO UN NUEVO RECURSO)

    app.post(BASE_API_URL+"/emp-stats", (req,res) => {

        console.log("New POST .../emp-stats");
        
        var newEmp = req.body;
        newEmp_size_keys = Object.keys(newEmp).length;
        newEmp_size_values = Object.values(newEmp).length;
        //console.log(Object.values(newEmp).length);
        var newCountry = req.body.country;
        var newYear = req.body.year;

        if(newEmp.country == null || newEmp.year == null || newEmp.emp_female_age15_24 == null || 
            newEmp.emp_male_age15_24 == null || newEmp.emp_vuln_female == null || newEmp.emp_vuln_male == null
            || (!newEmp_size_keys == 6 || !newEmp_size_values == 6) || (newEmp_size_keys == 0 || 
                newEmp_size_values == 0)){

                res.sendStatus(400, "Bad Request.");
        
        }else{

            db.find({"country": newCountry, "year": newYear}, (err, emp_stats) => {
                if(err) {
                    console.log("database error: " + err);  
                
                }else if(!emp_stats.length == 0){//Existe ya un recurso con el mismo país y año
                    res.sendStatus(409, "Resource already exists"); 
                    
                }else if(emp_stats.length == 0){ //No existe ningún recurso con ese país y año
                    
                    db.insert(newEmp);
                    res.sendStatus(201, "Resource added successfully");
                }      
            });
        }
        
    });

    //PUT EMP_STATS/XXX (ACTUALIZA UN RECURSO CONCRETO)

    app.put(BASE_API_URL+"/emp-stats/:country/:year", (req,res) =>{

        console.log("New PUT .../emp-stats/country/year");
        
        var country = req.params.country;
        var year = parseInt(req.params.year);
        var updateEmp = req.body;
        updateEmp_size_keys = Object.keys(updateEmp).length;
        updateEmp_size_values = Object.values(updateEmp).length;
        
        db.find({"country": country, "year": year}, (err, emp_stats) => {
            if(err) {
                console.log("database error: " + err);  
            
            }else if(!emp_stats.length == 0){
                     
                if(req.body.country == country && req.body.year == year && (updateEmp_size_keys == 6 && updateEmp_size_values == 6) && (!updateEmp_size_keys == 0 && !updateEmp_size_values == 0)){
                    
                    db.update({"country": country, "year": year}, updateEmp);
                    res.sendStatus(200);
                
                }else{
                    res.sendStatus(400, "Bad Request.");
                }
                
            }else if(emp_stats.length == 0){ 
                
                res.sendStatus(404, "Resource Not Found.");
            }      
        });
        
    });

    //DELETE EMP_STATS (BORRAR TODOS LOS RECURSOS)

    app.delete(BASE_API_URL+"/emp-stats", (req,res) =>{
        
        console.log("New DELETE .../emp-stats");

		db.remove({}, {multi:true});
        res.sendStatus(200);
    });

    //DELETE EMP_STATS/XXX (BORRA UN RECURSO CONCRETO)

    app.delete(BASE_API_URL+"/emp-stats/:country/:year", (req,res) =>{

        console.log("New DELETE .../emp-stats/country/year");
        
        var country = req.params.country;
        var year = parseInt(req.params.year);
        
        db.find({"country": country, "year": year}, (err, emp_stats) => {
            
            if(err) {
                console.log("database error: " + err);  
            
            }else if(!emp_stats.length == 0){
                
                db.remove({"country": country, "year": year});
                res.sendStatus(200);
                
            }else if(emp_stats.length == 0){ 
                
                res.sendStatus(404, "Resource Not Found");
            }      
        });
    });

    //PUT A TODOS LOS RECURSOS (¡¡¡INCORRECTO!!!)

    app.put(BASE_API_URL+"/emp-stats", (req,res) =>{
        
        res.sendStatus(405,"METHOD NOT ALLOWED");
    });

    //POST A UN RECURSO CONCRETO (¡¡¡INCORRECTO!!!)

    app.post(BASE_API_URL+"/emp-stats/:country/:year", (req,res) =>{
        
        res.sendStatus(405,"METHOD NOT ALLOWED");
    });

    console.log("Registered emp_stats_API.");

    //*****************************FIN API ENRIQUE*************************************************
    
}

