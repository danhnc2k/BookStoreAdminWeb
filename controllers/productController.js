const products = require('../models/product')
const productServices = require('../models/service/productService');

let ITEM_PER_PAGE = 5;

exports.getProducts = async function(req, res, next){
    const page = +req.query.page || 1;
    const filter = {
        "category.main": new RegExp(req.params.mainType, "i"),
        "category.sub": new RegExp(req.params.subType, "i")
    };
    const paginate = await productServices.listProducts(filter, page, ITEM_PER_PAGE);
    res.render("products", {
        title: "List Products",
        allProducts: paginate.docs,
        totalProducts: paginate.totalDocs,
        hasNextPage: paginate.hasNextPage,
        hasPrevPage: paginate.hasPrevPage,
        nextPage: paginate.nextPage,
        prevPage: paginate.prevPage,
        currentPage: paginate.page,
        totalPages: paginate.totalPages
    });
}

exports.getCategories = async function(req, res, next){
    
}

exports.getIndex = async function(req, res, next){
    res.render('index');
}

exports.getProductDetail = async function(req, res, next){
    //res.render('index');
}

exports.getDelivered = async function(req, res, next){
    const page = +req.query.page || 1;
    const paginate = await productServices.listProducts({}, page, ITEM_PER_PAGE);
    res.render("delivered", {
        title: "List Products",
        allProducts: paginate.docs,
        totalProducts: paginate.totalDocs,
        hasNextPage: paginate.hasNextPage,
        hasPrevPage: paginate.hasPrevPage,
        nextPage: paginate.nextPage,
        prevPage: paginate.prevPage,
        currentPage: paginate.page,
        totalPages: paginate.totalPages
    });
}

exports.getDelivering = async function(req, res, next){
    const page = +req.query.page || 1;
    const paginate = await productServices.listProducts({}, page, ITEM_PER_PAGE);
    res.render("delivering", {
        title: "List Products",
        allProducts: paginate.docs,
        totalProducts: paginate.totalDocs,
        hasNextPage: paginate.hasNextPage,
        hasPrevPage: paginate.hasPrevPage,
        nextPage: paginate.nextPage,
        prevPage: paginate.prevPage,
        currentPage: paginate.page,
        totalPages: paginate.totalPages
    });
}

exports.getDeliversoon = async function(req, res, next){
    const page = +req.query.page || 1;
    const paginate = await productServices.listProducts({}, page, ITEM_PER_PAGE);
    res.render("deliversoon", {
        title: "List Products",
        allProducts: paginate.docs,
        totalProducts: paginate.totalDocs,
        hasNextPage: paginate.hasNextPage,
        hasPrevPage: paginate.hasPrevPage,
        nextPage: paginate.nextPage,
        prevPage: paginate.prevPage,
        currentPage: paginate.page,
        totalPages: paginate.totalPages
    });
}
