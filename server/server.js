const express = require("express");
const path = require("path");

const app = express();

// API
app.get("/api", (req, res) => {
  res.json({ users: ["HELLO", "Sigma", "Joe"] });
});

// Раздаём статические файлы React
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/ *", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});