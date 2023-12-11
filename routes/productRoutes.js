const _ = require('lodash');
const {Path} = require('path-parser');

const mongoose = require('mongoose');
const requireLogin = require("../middlewares/requireLogin");
const requireAdminLogin = require("../middlewares/requireAdminLogin");

const Products = mongoose.model('products');

module.exports = app =>{
    app.get('/api/products', async (req, res)=>{
        const products = await Products.find();

        res.send(products);
    });

    app.post('/api/products/new', requireLogin, requireAdminLogin, async (req, res)=>{
        console.log(req.body)
        const {name, description, price, quantity} = req.body;
        console.log({
            barCode:'AA23B',
            name,
            description,
            price,
            quantity,
            _user: req.user.id,
            dateCreated:Date.now()
        });

        const product = new Products({
            barCode:'AA23B',
            name,
            description,
            price,
            quantity,
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