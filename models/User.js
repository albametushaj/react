const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleID: String,
    email: String,
    fullName: String
});

module.exports = userSchema;
mongoose.model('users', userSchema);