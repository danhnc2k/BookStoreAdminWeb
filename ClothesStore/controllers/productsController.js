const productsModel = require('../models/productsModel');

exports.index = (req, res, next) => {
    const productlist = productsModel.find({})
        .then(products => res.render("products/products",{products}))
        .catch(next)
};

exports.detail = (req, res, next) => {
    const productdetail = productsModel.find({slug: req.params.slug})
        .then(product => res.render("products/productDetail",{product}))
        .catch(next)
};

exports.create = (req, res, next) => {
    res.render("products/create",{})
};

exports.store = (req, res, next) => {
    if (req.body.men == "on") {
        req.body.men = true
    }
    if (req.body.women == "on") {
        req.body.women = true
    }
    if (req.body.kids == "on") {
        req.body.kids = true
    }
    const newProduct = new productsModel(req.body)
    newProduct.save()
    res.redirect("/products")
};