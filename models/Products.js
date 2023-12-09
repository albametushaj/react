const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    barCode: String,
    name: String,
    description: String,
    price: {type: Number, default: 0.00},
    quantity:{type:Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    dateCreated: Date
});

mongoose.model('products', productSchema);

const Product = mongoose.model('products');
//
// new Product({
//     name: 'Computer',
//     description:'HP computer',
//     price: 999.99,
//     dateCreated: Date.now(),
//     quantity: 15
// }).save();