const fetch = require('node-fetch');
const express=require("express");
const app =express();
app.set("view engine","ejs");

app.use(express.static("public"));

app.get("/", async function(req,res){
  const response = await fetch("https://api.wazirx.com/api/v2/tickers")
  const data = await response.json();
  const keys = Object.keys(data);
  res.render("body",{data:data,keys:keys})


})

app.post("/",function(req,res){
})


app.listen(3000,function(){
  console.log("server is running on port 3000");
})
