import { nanoid } from "nanoid";
import URL from "../model/url.js";

export async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url)
    return res.status(400).send({
      error: "url is required!",
    });
  const shortID = nanoid(8);

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.render('home',{id: shortID });
  


}

export async function handleUpdateID(req, res) {
  const shortID = req.params.shortID;
  console.log("🔍 Received shortID:", shortID);

  const entry = await URL.findOneAndUpdate(
    { shortId: shortID },
    {
      $push: {
        visitHistory: { timestamp: Date.now() }
      }
    },
    { new: true }
  );

  if (!entry) {
    console.log("❌ No matching shortId found in DB.");
    return res.status(404).send("Short URL not found");
  }

  console.log("✅ Redirecting to:", entry.redirectURL);
  return res.redirect(entry.redirectURL);
}

export async function handleGetAnalytics(req,res) {
    const shortID = req.params.shortID;
    const result = await URL.findOne({
       shortId:   shortID
    });
    return res.json({totalClicks : result.visitHistory.length,analytics : result.visitHistory, })
}