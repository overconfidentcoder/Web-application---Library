const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryAppMongoose');
const Schema= mongoose.Schema;
var NewAuthorSchema = new Schema(
    {
        Name: String,
        Nationality: String,
        Professon: String

    }
);

var Authordata = mongoose.model('Author-data',NewAuthorSchema);
module.exports = Authordata;