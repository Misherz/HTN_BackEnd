import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv"

//import DB connections
import connectDB from "./db/conn.mjs";

//import routes
import entryRoute from './route/entryRoutes.mjs';

//import data

//schemas

//setup
const app = express();
dotenv.config()
let PORT = process.env.PORT || 3001;

//connect()
connectDB()

//middleware
app.use(cors())
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))

//routes
app.use('/journal', entryRoute)

//seed 
app.get('/seed/journal', async (req, res) => {
    //optional

    await SpookyCharacters.deleteMany({});

    //create items in database
    await SpookyCharacters.create(characters);

    res.send('Seeding database');

})



//listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});