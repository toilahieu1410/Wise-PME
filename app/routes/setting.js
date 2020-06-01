var Alarm = require('../models/alarm');
var Alarm972 = require('../models/alarm972');
var AlarmDH = require('../models/alarmDH');

var alarmMax87 = require('../models/alarmMax87');
var User = require('../models/user');

module.exports = function(app, passport) {

    // Ham kiem tra login
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    }
        // Ham kiem tra role
        function authRole(role1, role2) {
            return (req, res, next) => {
            if (req.user.local.role !== role1 && req.user.local.role !== role2) {
                res.status(401)
                return false
            }
        
            next()
            }
        }

        // SETTING
        app.get('/setting', authRole('admin', 'user'), isLoggedIn, function(req, res) {
            alarmMax87.find({}, function(err, data) {
                res.render('setting/index', {
                    user : req.user,
                    data: data
                });
            })
        });


        app.get('/setting/:id', isLoggedIn, function(req, res, next) {
            var id2 = req.params.id;
            alarmMax87.find({ _id : id2}, function(err, data) {
                res.render('setting/menu/editSetting', {user : req.user,data: data});
            })
        })
        app.post('/setting/:id', function(req, res, next) {
            var id = req.params.id;
            alarmMax87.findById(id, function(err, data) {
                data.CurrentMax = req.body.CurrentMax;
                data.VolUMax = req.body.VolUMax;
                data.VolVMax = req.body.VolVMax;
                data.THDBigMax = req.body.THDBigMax;
                data.thdMax = req.body.thdMax;
                data.save();
                res.redirect('/setting');
            });
        })

        //Acount
        app.get('/account', authRole('admin'), isLoggedIn, function(req, res) {
            User.find({}, function(err, data) {
                res.render('setting/account', {
                    user : req.user,
                    data: data
                });
            })
        });
        // Add Acount
        app.get('/add-account', authRole('admin'), isLoggedIn, function(req, res, next) {
            res.render('setting/menu/addacc', {user : req.user, message: req.flash('signupMessage')});
        })

        app.post('/add-account', passport.authenticate('local-signup', {
            successRedirect : '/account', // Dieu huong toi trang hien thi
            failureRedirect : '/add-account', // Tro lai trang chu neu loi
            failureFlash : true,
        }));

        //Xoa Acount
        app.get('/account/:id', function(req, res, next) {
            var id = req.params.id;
            User.findByIdAndRemove(id).exec();
            res.redirect('/account')
        });
}