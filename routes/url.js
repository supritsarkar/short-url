import express from "express";
import {handleGenerateNewShortURL,handleUpdateID,handleGetAnalytics} from '../controllers/url.js';
const urlRouter = express.Router();



urlRouter.post("/" ,(req, res, next) => {
  console.log("📨 POST /url hit");
  next();
},handleGenerateNewShortURL);

urlRouter.get("/:shortID", (req, res, next) => {
  console.log("🔍 GET /url/:shortID hit");
  next();
},handleUpdateID);

urlRouter.get("/analytics/:shortID",handleGetAnalytics);



export default urlRouter;