var express = require("express")
var app = express();
var user = require('./routes/user')

app.use(express.static("public"))

app.get("/", function(req,res){
	
})

app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})


app.listen(888, () => console.log("starting..."))
