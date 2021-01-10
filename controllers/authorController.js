
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
exports.getEditProfile = async function (req, res, next) {
    res.render('editProfile');
}