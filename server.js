const express = require("express");
const app = express();

app.set("view engine", "ejs");

//use res.render to load up an ejs view file

//index page
app.get("/", (req, res) => {
  const drinks = [
    { name: "Bloody Mary", drunkness: 3 },
    { name: "Martini", drunkness: 5 },
    { name: "Scotch", drunkness: 10 }
  ];
  let tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";
  res.render("pages/index", {
    drinks: drinks,
    tagline: tagline
  });
});

//about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(8080);
console.log("8080 is the magic port");