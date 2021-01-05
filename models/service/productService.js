const products = require('../model/product')
const mongoose = require('mongoose');

exports.listProducts = async function(filter, pageNumber, itemPerPage){
    const listProducts = await products.paginate(filter, {
        page: pageNumber,
        limit: itemPerPage
    });
    return listProducts;
}
