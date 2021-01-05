const products = require('../models/model/product')
const productServices = require('../models/service/productService');

let ITEM_PER_PAGE = 5;

exports.getProducts = async function(req, res, next){
    const page = +req.query.page || 1;
    const filter ={};
    const paginate = await productServices.listProducts(filter, page, ITEM_PER_PAGE);
    res.render("layout", {
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
   res.render('layout');
}

