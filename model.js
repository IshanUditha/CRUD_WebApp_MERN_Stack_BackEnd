const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    address: String,

});
const userDetails = mongoose.model('userDetails',userSchema);

module.exports = userDetails;