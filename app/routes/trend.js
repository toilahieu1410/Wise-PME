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
                return res.send('Not Allowed!')
            }
        
            next()
            }
        }

   
        //TREND/LVMSB1
        app.get('/trend', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB1/voltages', {
                user : req.user
            });
        });

        app.get('/trend/LVMSB1/voltages', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB1/voltages', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB1/currents', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB1/currents', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB1/powers', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB1/powers', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB1/frequency', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB1/frequency', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB1/thd-big', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB1/thd-big', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB1/thd', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB1/thd', {
                user : req.user
            });
        });
    
                // Trend/LVMSB2
        app.get('/trend/LVMSB2/voltages', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB2/voltages', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB2/currents', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB2/currents', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB2/powers', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB2/powers', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB2/frequency', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB2/frequency', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB2/thd-big', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB2/thd-big', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB2/thd', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB2/thd', {
                user : req.user
            });
        });
    
                    // Trend/LVMSB3
        app.get('/trend/LVMSB3/voltages', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB3/voltages', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB3/currents', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB3/currents', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB3/powers', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB3/powers', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB3/frequency', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB3/frequency', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB3/thd-big', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB3/thd-big', {
                user : req.user
            });
        });
    
        app.get('/trend/LVMSB3/thd', isLoggedIn, function(req, res) {
            res.render('trend/LVMSB3/thd', {
                user : req.user
            });
        });
}