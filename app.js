var express=require("express");

var app=express();

var path=require("path");


app.use(express.static(path.join(__dirname,'public')));

app.listen(3500,function() {
  console.log("app is live and kicking at 3500");
});
