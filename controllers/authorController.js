const userServices = require('../models/service/orderService');


exports.getLogin = async function(req, res, next){
    res.render('login');
}

exports.getResetPassword = async function(req, res, next){
    //res.render('login');
}

exports.getUsers = async function (req, res, next){
    const page = +req.query.page || 1;
    const search_value = req.query.search;
    const filter = {};

    let itemPerPageList = [5, 10, 15, 20];
    let length_value;

    if (req.query.length){
        length_value = req.query.length;
    }else{
        length_value = 1;
    }
    if (search_value && search_value != "")
    {
        filter['firstName'||'lastName'] = new RegExp(`${search_value}`, "i");
    }
    const paginate = await productServices.listProducts(filter, page, itemPerPageList[length_value]);
    res.render("products", {
        categories: categoriesList,
        prices: priceList,
        sizes: sizeList,
        labels: labelList,
        lengths: itemPerPageList,
        lengthValue: length_value,
        searchValue: search_value,
        priceValue: price_value,
        sizeValue: size_value,
        labelValue: label_value,
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

exports.getProfile = async function (req, res, next){
    res.render('profile');
}
exports.getEditProfile = async function (req, res, next) {
    res.render('editProfile');
}