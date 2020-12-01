const productsModel = require('../models/productsModel');

exports.index = (req, res, next) => {
    const productlist = productsModel.find({})
        .then(products => res.render("products/products", {products}))
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
    .then(() => res.redirect("/products"))
    .catch(next)
};

exports.delete = (req, res, next) => {
    const deleteProduct = productsModel.deleteOne({_id : req.params.id})
    .then(() => res.redirect("/products"))
    .catch(next)
};

exports.edit = (req, res, next) => {
    productsModel.findById(req.params.id)
        .then(product => {
            var checkedMen=""
            var checkedWomen=""
            var checkedKids=""
            if (product.men == true) {
                checkedMen = "checked"
            }
            if (product.women == true) {
                checkedWomen = "checked"
            }
            if (product.kids == true) {
                checkedKids = "checked"
            }
            res.render("products/changed", {product, checkedKids, checkedMen, checkedWomen})})
        .catch(next)
};

exports.update = (req, res, next) => {
    if (req.body.men == "on") {
        req.body.men = true
    }
    if (req.body.women == "on") {
        req.body.women = true
    }
    if (req.body.kids == "on") {
        req.body.kids = true
    }
    const deleteProduct = productsModel.updateOne({_id : req.params.id}, req.body)
    .then(() => res.redirect("/products"))
    .catch(next)
};





