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

//routes

//seed 

//listener