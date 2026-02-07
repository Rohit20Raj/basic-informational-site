const express = require("express");
const path = require("path");

const app = express();

const pagesPath = path.join(__dirname, "");

app.get("/", (req, res) => {
  res.sendFile(path.join(pagesPath, "index.html"));
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(pagesPath, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(pagesPath, "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(pagesPath, "contact-me.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(pagesPath, "404.html"));
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Express App running on port ${PORT}`);
});
