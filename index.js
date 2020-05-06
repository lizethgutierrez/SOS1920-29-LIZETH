const express = require("express");
const bodyParser = require("body-parser"); 
const path = require("path");

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 80;
app.use("/", express.static("./public"));


//API Jairo
const edq_stats_API = require(path.join(__dirname,"/src/back/edq_stats_API"));
edq_stats_API(app);

//API Enrique
const emp_stats_API = require(path.join(__dirname,"/src/back/emp_stats_API"));
emp_stats_API(app);

//API Liz
const womanAPIV1 = require(path.join(__dirname,"/src/back/womanresearchers_stats_API/v1"));
const womanAPIV2 = require(path.join(__dirname,"/src/back/womanresearchers_stats_API/v2"));
womanAPIV1(app);
womanAPIV2(app);


app.listen(port, () => {
	console.log("Server ready!");
});

console.log("Starting server...");