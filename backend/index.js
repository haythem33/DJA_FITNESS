const express = require('express');
const databaseConfig = require("./config/databaseConfig");
const authRoute = require('./auth/auth');
const userRoutes = require('./user/user'); 
const bodyParser = require("body-parser")
const cors = require("cors")


const app = express();
app.use(cors())
app.use(bodyParser.json());
databaseConfig.connect();

app.use("/auth",authRoute);
app.use("/user",userRoutes);

app.listen(3000,() => {
    console.log("Server listening on 3000")
})