const orderServices = require('../models/service/orderService');
const userServices = require('../models/service/userService');
const productServices = require('../models/service/productService');
const { ObjectId } = require('mongodb');



exports.getOrders = async function(req, res, next){
    let itemPerPageList = [5, 10, 15, 20];
    let length_value;
    if (req.query.length){
        length_value = req.query.length;
    }else{
        length_value = 1;
    }
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
        filter['deliverStatus'] = {$eq: status_value};
    }

    const paginate = await orderServices.listOrders(filter, page, itemPerPageList[length_value]);
    const name_list=[];
    let name;
    let id;
    for (const doc of paginate.docs){
        id = doc.user.toString();
        name = await userServices.getUserFullname(id);
        name_list.push(name);
    }
    
    res.render("orders", {
        statusList: status_list,
        statusValue: status_value,
        lengths: itemPerPageList,
        lengthValue: length_value,
        nameList: name_list,
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

