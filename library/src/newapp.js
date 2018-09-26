const express = require('express');
const chalk = require('chalk');
const path = require('path');
var app = new express();
const booksRouter=express.Router();

app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');

booksRouter.route('/')
.get((req,res)=>{
    res.render('books',
    {nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'}],
  title:"Library"});
});
app.use('/books',booksRouter);

booksRouter.route('/single')
.get((req,res)=>{
    res.send("Hello Single Books");
});
app.use('/books/single',booksRouter);

app.get('/',function(req,res)
{
    

// app.get('/',function(req,res){
   // res.send('Hello from my library app');
  // res.sendFile(__dirname+"/views/index.html");
  // res.sendFile(path.join(__dirname,"/views/index.html"));
  // res.render('index',{title:"Library"})


  res.render('books',{nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'}],
  title:"Library"});
});
app.listen(3000,function()
{
    console.log('listening to your port'+ chalk.green('3000'));
});