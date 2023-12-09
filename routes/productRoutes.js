const _ = require('lodash');
const {Path} = require('path-parser');

const mongoose = require('mongoose');
const requireLogin = require("../middlewares/requireLogin");

const Products = mongoose.model('products');

module.exports = app =>{
    app.get('/api/products', async (req, res)=>{
        const products = await Products.find();

        res.send(products);
    });

    app.post('/api/product', requireLogin, async (req, res)=>{
        console.log(req.body)
        const {name, description, price, quantity} = req.body;

        const product = new Products({
            barCode:'AA23B',
            name,
            description,
            price,
            _user: req.user.id,
            dateCreated:Date.now()
        })
        try{
            await product.save();

            res.send(req.user);
        }
        catch (e) {
            res.status(422);
        }

    });
}