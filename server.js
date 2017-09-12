const express = require("express");
const app = express();

app.set("view engine", "ejs");

//use res.render to load up an ejs view file

//index page
app.get("/", (req, res) => {
  res.render("pages/index");
});

//about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(8080);
console.log("8080 is the magic port");