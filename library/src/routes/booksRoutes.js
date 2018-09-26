
const express = require('express');
const booksRouter = express.Router();
const mongoose = require('mongoose');
const Bookdata = require('../model/bookmodel');

function router(nav)
{


booksRouter.route('/')
.get((req,res)=>{
    Bookdata.find()
    .then(function(books){
        
    
    res.render('books',
    {nav,
    title:"Library",
    books});
});
});

booksRouter.route('/:id')
.get((req,res)=>{
    const id = req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){

    
    res.render('book',{nav,
    title:"Library",
    book
});
    });




    // res.send("Hello Single Books");
});
return booksRouter;

}

module.exports = router;