

exports.index = (req, res, next) => {
    res.render('layout');
};

exports.users = (req, res, next) => {
    res.render('users');
};

exports.profile = (req, res, next) => {
    res.render('profile');
};