import "dotenv/config"
require("dotenv").config()
const mongoose =  require("mongoose")
const express = require("express")
const app = express()
const path = require("path")
app.use(express.json())

const userRoute = require("./server/routes/user")

mongoose.connect(process.env.dbURL) 
    .then(() => console.log("DB Connected!!"))
    .catch(error => console.log(error));

//CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.use(express.static(__dirname + "/public"))
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public", "index.html")))

app.use("/users", userRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server started on PORT ${PORT}! `))
