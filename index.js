const express = require("express");

const bodyParser = require("body-parser");

const path = require("path");


const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 80;

app.use("/",express.static("./public"));


const womanAPI = require(path.join(__dirname,"womanresearcherAPI"));
womanAPI(app);


const BASE_API_URL = "/api/v1";


app.listen(port, () => {
	console.log("Server ready!");
});

console.log("Starting server...");
