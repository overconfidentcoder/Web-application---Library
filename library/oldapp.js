const express = require('express');
const chalk = require('chalk');
const path = require('path');
var app = new express();

app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');
app.get('/',function(req,res)
{
    

// app.get('/',function(req,res){
   // res.send('Hello from my library app');
  // res.sendFile(__dirname+"/views/index.html");
  // res.sendFile(path.join(__dirname,"/views/index.html"));
  // res.render('index',{title:"Library"});
  res.render('index',{nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'}],
  title:"Library"});
});
app.listen(3000,function()
{
    console.log('listening to your port'+ chalk.green('3000'));
});