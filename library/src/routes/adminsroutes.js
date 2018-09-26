
const express = require('express');
const adminsRouter=express.Router();
// const {MongoClient} = require('mongodb');
const Authordata = require('../model/authormodel')
function router(nav)
{




adminsRouter.route('/')
.get((req,res)=>{
    res.render(
        'addauthor',
        {
            nav,
    title:"Library",
    }
);
});

   adminsRouter.route('/add')
   
   .get((req,res)=>{
       var item = {
           Name : req.param('Name'),
           Nationality : req.param('Nationality'),
           Profession : req.param('Profession')
       }
       var author = new Authordata(item);
       author.save();
       res.redirect('/authors');

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

return adminsRouter;

}
module.exports = router;
