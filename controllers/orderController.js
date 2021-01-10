const orderServices = require('../models/service/orderService');
const userServices = require('../models/service/userService');
const productServices = require('../models/service/productService');

const ITEM_PER_PAGE = 5;

exports.getOrders = async function(req, res, next){

    let status_list =['Chưa giao', 'Đang giao', 'Đã giao'];
    const page = +req.query.page || 1;
    const filter = {};
    let status_value;
    if (req.query.status)
    {
        status_value = +req.query.status;
    }
    if (status_value != undefined && status_value != -1)
    {
        filter['status'] = {$eq: status_value};
    }

    const paginate = await orderServices.listOrders(filter, page, ITEM_PER_PAGE);
    res.render("orders", {
        statusList: status_list,
        statusValue: status_value,
        allOrders: paginate.docs,
        totalOrders: paginate.totalDocs,
        hasNextPage: paginate.hasNextPage,
        hasPrevPage: paginate.hasPrevPage,
        nextPage: paginate.nextPage,
        prevPage: paginate.prevPage,
        currentPage: paginate.page,
        totalPages: paginate.totalPages
    });
}

