
const express = require('express');
const authorsRouter=express.Router();
const mongoose = require('mongoose');
const Authordata = require('../model/authormodel');


function router(nav){


authorsRouter.route('/')
.get((req,res)=>{
    Authordata.find()
    .then(function(authors){
        
    
    res.render('authors',
    {nav,
    title:"Library",
    authors});
});
});

    authorsRouter.route('/:id')
    .get((req,res)=>{
        const id = req.params.id;
        Authordata.findOne({_id:id})
    .then(function(author){

        res.render('author',{nav,
        title:"Library",
        author
    });
});






    // res.send("Hello Single Books");
});
return authorsRouter;

}
module.exports = router;
