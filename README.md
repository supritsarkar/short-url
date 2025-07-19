# 🔗 Custom URL Shortener

Create your own URL shortener with Node.js and MongoDB.

---


## 📝 Overview

This project enables you to:

- **Generate** short, unique URLs from long links.
- **Redirect** users to the original URLs using short codes.
- **Track** basic usage data via MongoDB.

Built with:
- **Node.js** & **Express** — for server-side logic and routing.
- **MongoDB** — to store mappings between short codes and original URLs.
- **Mongoose** — ODM to manage data schemas.
- **nanoid** (or similar) — for generating unique short codes.
- **dotenv** — to load environment variables securely.

---

## 📁 Project Structure
<pre lang="text"><code> ```text url-shortener/ ├── src/ │ ├── models/ │ │ └── Url.js # Mongoose schema: { originalUrl, shortCode, createdAt } │ ├── routes/ │ │ └── index.js # POST /shorten & GET /:code endpoints │ ├── controllers/ # (Optional) Business logic handlers │ ├── app.js # Express app setup & middleware │ └── server.js # Starts the server ├── .env # Environment variables (API_URL, MONGO_URI) ├── .gitignore # Excludes node_modules, logs, .env ├── package.json └── README.md ``` </code></pre>
