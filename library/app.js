const express = require('express');
const chalk = require('chalk');
const path = require('path');
var app = new express();
const nav = [
  { link:'/books',title:'Books'},
  {link:'/authors',title:'Authors'},
  {link:'/admin',title:'Addbook'},
  {link:'/admins',title:'Addauthor'}
];



const booksRouter = require('./src/routes/booksRoutes.js')(nav);
const authorsRouter = require('./src/routes/authorRoutes.js')(nav);
const adminRouter = require('./src/routes/adminroutes.js')(nav);
const adminsRouter = require('./src/routes/adminsroutes')(nav);


app.use('/books',booksRouter);


app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');

app.use('/authors',authorsRouter);


app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');

app.use('/admin',adminRouter);

app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');

app.use('/admins',adminsRouter);

app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');



//booksRouter.route('/single')
//.get((req,res)=>{
  //  res.send("Hello Single Books");
//});
//app.use('/books/single',booksRouter);

app.get('/',function(req,res)

{
    

// app.get('/',function(req,res){
   // res.send('Hello from my library app');
  // res.sendFile(__dirname+"/views/index.html");
  // res.sendFile(path.join(__dirname,"/views/index.html"));
  // res.render('index',{title:"Library"})


  res.render('index',{nav,
  title:"Library"});
});
app.listen(3000,function()
{
    console.log('listening to your port'+ chalk.green('3000'));
});