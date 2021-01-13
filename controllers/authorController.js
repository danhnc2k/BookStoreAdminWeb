<<<<<<< Updated upstream
=======
const userServices = require('../models/service/userService');
const adminServices = require('../models/service/adminService');
>>>>>>> Stashed changes

exports.getLogin = async function(req, res, next){
    res.render('login');
}

exports.getResetPassword = async function(req, res, next){
    //res.render('login');
}

exports.getUsers = async function (req, res, next){
    res.render('users');
}

exports.getProfile = async function (req, res, next){
    res.render('profile');
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