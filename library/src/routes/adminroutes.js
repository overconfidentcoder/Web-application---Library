
const express = require('express');
const adminRouter=express.Router();
// const {MongoClient} = require('mongodb');
const Bookdata = require('../model/bookmodel')
function router(nav)
{




adminRouter.route('/')
.get((req,res)=>{
    res.render(
        'addbook',
        {
            nav,
    title:"Library",
    }
);
});

   adminRouter.route('/add')
   
   .get((req,res)=>{
       var item = {
           title : req.param('title'),
           author : req.param('author'),
           genre : req.param('genre')
       }
       var book = new Bookdata(item);
       book.save();
       res.redirect('/books');

     /*  var title = req.param('title');
       var author = req.param('author');
       var genre = req.param('genre');
       const Books =[
           {
           title : rtitle,
           author : rauthor,
           genre : rgenre,
           }]; 

       const url = 'mongodb://localhost:27017';
       const dbname = 'Library App';
       (

        async function mongo()
        {
            let client;
            try{
                client = await MongoClient.connect(url);
                constdb = client.db(dbname);
                const response = await db.collection('books').insertMany(books);
                res.redirect('/books');

            }
            catch(err)
            {
                console.log(err,stack);
            }
            client.close();

        }());
*/       
   });
       
   






    // res.send("Hello Single Books");

return adminRouter;

}
module.exports = router;
