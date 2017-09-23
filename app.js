var bodyParser = require("body-parser"),
            gs = require('github-scraper'),
       express = require("express"),
           app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.post("/", function(req, res){
    var url = req.body.name; // a random username
    gs(url, function(err, data){
    if(err){
        res.render("err");
    } else {
        res.redirect(data["url"]);
    }
    });
});

app.get("/err", function(req, res){
   res.render("err"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp server started!"); 
});
