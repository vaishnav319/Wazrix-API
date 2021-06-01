const fetch = require('node-fetch');
const express=require("express");
const app =express();
app.set("view engine","ejs");
app.use(express.static("public"));
//get route
app.get("/", async function(req,res){
  const response = await fetch("https://api.wazirx.com/api/v2/tickers")
  const data = await response.json();
  const keys = Object.keys(data);
  res.render("body",{data:data,keys:keys})
})
//Post route- here nothing to post
app.post("/",function(req,res){
})
//Accessing port
let port = process.env.PORT;
if(port == null || port==""){
  port=3000;
}
app.listen(port, function() {
  console.log("Server started Successfully");
});
