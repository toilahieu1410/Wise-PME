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

        app.get('/trend/LVMSB1/voltages', isLoggedIn, function(req, res) {
            res.render('trend/Voltages/voltages', {
                user : req.user,
                url: 'LVMSB1/js/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB1/currents', isLoggedIn, function(req, res) {
            res.render('trend/Currents/currents', {
                user : req.user,
                url: 'LVMSB1/js2/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB1/powers', isLoggedIn, function(req, res) {
            res.render('trend/Power/powers', {
                user : req.user,
                url: 'LVMSB1/js3/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB1/frequency', isLoggedIn, function(req, res) {
            res.render('trend/Frequency/frequency', {
                user : req.user,
                url: 'LVMSB1/js4/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB1/thd-big', isLoggedIn, function(req, res) {
            res.render('trend/THD_big/thd-big', {
                user : req.user,
                url: 'LVMSB1/js5/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB1/thd', isLoggedIn, function(req, res) {
            res.render('trend/thd/thd', {
                user : req.user,
                url: 'LVMSB1/js6/line-chart.js'
            });
        });
    
                // Trend/LVMSB2
        app.get('/trend/LVMSB2/voltages', isLoggedIn, function(req, res) {
            res.render('trend/Voltages/voltages', {
                user : req.user,
                url: 'LVMSB2/js/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB2/currents', isLoggedIn, function(req, res) {
            res.render('trend/Currents/currents', {
                user : req.user,
                url: 'LVMSB2/js2/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB2/powers', isLoggedIn, function(req, res) {
            res.render('trend/Power/powers', {
                user : req.user,
                url: 'LVMSB2/js3/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB2/frequency', isLoggedIn, function(req, res) {
            res.render('trend/Frequency/frequency', {
                user : req.user,
                url: 'LVMSB2/js4/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB2/thd-big', isLoggedIn, function(req, res) {
            res.render('trend/THD_big/thd-big', {
                user : req.user,
                url: 'LVMSB2/js5/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB2/thd', isLoggedIn, function(req, res) {
            res.render('trend/thd/thd', {
                user : req.user,
                url: 'LVMSB2/js6/line-chart.js'
            });
        });
    
                    // Trend/LVMSB3
        app.get('/trend/LVMSB3/voltages', isLoggedIn, function(req, res) {
            res.render('trend/Voltages/voltages', {
                user : req.user,
                url: 'LVMSB3/js/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB3/currents', isLoggedIn, function(req, res) {
            res.render('trend/Currents/currents', {
                user : req.user,
                url: 'LVMSB3/js2/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB3/powers', isLoggedIn, function(req, res) {
            res.render('trend/Power/powers', {
                user : req.user,
                url: 'LVMSB3/js3/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB3/frequency', isLoggedIn, function(req, res) {
            res.render('trend/Frequency/frequency', {
                user : req.user,
                url: 'LVMSB3/js4/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB3/thd-big', isLoggedIn, function(req, res) {
            res.render('trend/THD_big/thd-big', {
                user : req.user,
                url: 'LVMSB3/js5/line-chart.js'
            });
        });
    
        app.get('/trend/LVMSB3/thd', isLoggedIn, function(req, res) {
            res.render('trend/thd/thd', {
                user : req.user,
                url: 'LVMSB3/js6/line-chart.js'
            });
        });
}