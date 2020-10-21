let mongoose = require('mongoose');
let Schema = mongoose.Schema; // alias
let Model = mongoose.model; // alias

let BuisnessSchema = new Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: 'buisness'
});

module.exports.Model = Model('Buisness', BuisnessSchema);