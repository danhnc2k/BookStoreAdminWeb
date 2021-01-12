const userServices = require('../models/service/userService');
const adminServices = require('../models/service/adminService');

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
        filter['firstName'] = new RegExp(`${search_value}`, "i");
    }
    let paginate = await userServices.listUsers(filter, page, itemPerPageList[length_value]);
    res.render("users", {
        lengths: itemPerPageList,
        lengthValue: length_value,
        searchValue: search_value,
        allUsers: paginate.docs,
        totalUsers: paginate.totalDocs,
        hasNextPage: paginate.hasNextPage,
        hasPrevPage: paginate.hasPrevPage,
        nextPage: paginate.nextPage,
        prevPage: paginate.prevPage,
        currentPage: paginate.page,
        totalPages: paginate.totalPages
    });
}

exports.getUserProfile = async function (req, res, next){
    const user = await userServices.getUser(req.params.id);
    res.render('userProfile',{
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        isLocked: user.isLocked,
        avatar: user.avatar
    });
}
exports.lockUser = async function(req, res, next){
    const id = req.body.id;
    await userServices.lockUser(id);
    res.redirect('/users/detail/'+id);
}
exports.getAdminProfile = async function (req, res, next) {
    const admin = await adminServices.getAdmin('5ffd63ef70359aa790bdbc85');
    res.render('adminProfile',{
        id: admin._id,
        username: admin.username,
        firstName: admin.firstName,
        lastName: admin.lastName,
        phoneNumber: admin.phoneNumber,
        email: admin.email,
        avatar: admin.avatar
    });
}

exports.updateAdminProfile = async function(req, res, next){
    await adminServices.update(req.body.id,req.body.firstName,req.body.lastName,req.body.email,req.body.phoneNumber,req.body.avatar);
    res.redirect('/admin/detail');
}