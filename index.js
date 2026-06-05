const express = require("express")
const app = express()

const userRoute = require("./server/routes/user")

//CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.use("/users", userRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server started on PORT ${PORT}! `))