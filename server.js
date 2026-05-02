const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/ask", (req, res) => {
  let q = req.body.question.toLowerCase();

  let reply = "Samajh nahi aaya 🤔";

  if(q.includes("hello")) reply = "Hello bhai 👋";
  else if(q.includes("price")) reply = "Website ₹999 se start 💰";
  else if(q.includes("app")) reply = "App bana denge 📱";
  else if(q.includes("ai")) reply = "AI tools available 🤖";

  res.json({ reply });
});

app.listen(3000, () => console.log("Server running"));
