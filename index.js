import express from "express";
import urlRouter from './routes/url.js';
import connectToMongoDB from './config/url.js';
import dotenv from 'dotenv';
import path from 'path';
import staticRouter from './routes/staticRouter.js'
dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
// app.engine()
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/url',urlRouter);
app.use('/',staticRouter);
app.use(express.static("public"));





connectToMongoDB()
.then("Mongodb connected!")

app.listen(port,()=>{
   console.log(`Server Started at Port :  ${port}`);
})