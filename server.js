// 1 step
const express = require("express");
//2 step : instanciation
const app = express();
//5step : dotenv config
require("dotenv").config();
const route = require("./routes/userRoute");
// 8 step : middleware bodyparser
app.use(express.json());
//6 step : connect db
const connectDB = require("./config/connectDB");
connectDB();
// step 7 : routes
app.use("/api/user/", route);
// 3 step :declaration port
const PORT = process.env.PORT;
// 4step: create server
app.listen(PORT, (err) =>
    err ? console.error(err) : console.log(`this server is running on ${PORT}`)
);
