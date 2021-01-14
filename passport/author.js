// passport configuration
const User = require('../models/admin');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findOne({
      _id: id
    })
      .then(function(user) {
        done(null, user);
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  passport.use(
    'local-signin',
    new LocalStrategy(function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: 'Sai tên đăng nhập hoặc mật khẩu.'
          });
        }


        bcrypt.compare(password, user.password, function(err, result) {
          if (err) {
            return done(err);
          }
         
            if (result) {
                return done(null, user);
                
            } else {
                return done(null, false, {
                    message: 'Sai tên đăng nhập hoặc mật khẩu.'
                });
            }
        });
      });
    })
  );
  passport.use(
    'local-change-pass',
    new LocalStrategy({ passReqToCallback: true }, function(req, username, password, done) {
    User.findOne({ username: username }, async function(err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {
                message: 'Sai tên đăng nhập hoặc mật khẩu.'
            });
        }
        bcrypt.compare(password, user.password, async function(err, result) {
            if (err) {
                return done(err);
            }
            if (result) {
                if (req.body.newpass !== req.body.newpassagain) {
                    return done(null, false, {
                        message: 'Hai mật khẩu không khớp!'
                    });
                    
                }else{
                    bcrypt.hash(req.body.newpass, 12).then(hashPassword => {
                        user.password = hashPassword;
                        user.save();
                    });
                    return done(null, user);
                }
            } else {
                return done(null, false, {
                    message: 'Sai tên đăng nhập hoặc mật khẩu.'
                });
            }
        });
    });
  }));
};
