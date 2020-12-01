const productsModel = require('../models/productsModel');

exports.index = (req, res, next) => {
    const productlist = productsModel.find({})
        .then(products => res.render("products/products",{products}))
        .catch(next)
};