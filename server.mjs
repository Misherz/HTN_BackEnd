import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv"

//import DB connections
import connectDB from "./db/conn.mjs";

//import routes

//import data

//schemas

//setup
const app = express();
dotenv.config()
let PORT = process.env.PORT || 3001;

//connect()
connectDB()

//middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))

//routes
app.use('/journal', entriesRoutes)

//seed 

//listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});