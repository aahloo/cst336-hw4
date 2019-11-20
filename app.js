
const express = require('express'); // import Express lib 
const app = express(); // reference provides access to Express methods -- name of function matches name of const above
var faker = require('faker');   // install package and create faker.js variable to generate random phrases and images for pages

app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); // specify the external src folder

function randomQuoteGen() {
        
    var rdmQuote = faker.hacker.phrase();    // generate quote
    var verse = "\"" + rdmQuote + "\" - " + "Anonymous";
    return verse;
  
}

function randomAuthGen() {
    
    var rdmName = faker.name.findName();   // generate fake author of web site
    return rdmName;
}


/* Creates the root route, which sends response when root folder of website is requested */
// NOTE: all html files must be placed in /views

app.get("/", function(req, res) {
  res.render("index.html", {fakeName: randomAuthGen()});
});

app.get("/about.html", function(req, res) {
    res.render("about.html", {fakeName: randomAuthGen()});
});

app.get("/can.html", function(req, res) {
    res.render("can.html", {fakeName: randomAuthGen()});
});

app.get("/cannot.html", function(req, res) {
    res.render("cannot.html", {fakeName: randomAuthGen()});
});

app.get("/sources.html", function(req, res) {
    res.render("sources.html", {fakeName: randomAuthGen()});
});

// server listener for Heroku
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Running Express Server...");
});

/*
// server listener for AWS Cloud9
app.listen("8080", "127.0.0.1", function() {
    console.log("Express Server is running...");
});
*/



