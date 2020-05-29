
var request = require('request');
var Alarm = require('./models/alarm');
var Alarm972 = require('./models/alarm972');
var AlarmDH = require('./models/alarmDH');
var alarmMax87 = require('./models/alarmMax87');
var User = require('./models/user');

module.exports = function(app, passport, isLoggedIn, authRole) {

    // Trang chu
    app.get('/', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage')} ); 
    });

    //form dang nhap
    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });
    
   app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/homepage/homepage',
        failureRedirect : '/login', 
        failureFlash : true
    }));

    //dang xuat
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

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
            return res.send('Not Allowed!')
        }
    
        next()
        }
    }

};



