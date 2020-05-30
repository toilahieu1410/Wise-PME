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

        //DASHBOARD/LVMSB1
    app.get('/dashboard/LVMSB1/voltages', isLoggedIn, function(req, res) {
        res.render('dashboard/Voltages/voltages', {
            user : req.user,
            url: 'LVMSB1/js/line-chart.js'
        });
    });

    app.get('/dashboard/LVMSB1/currents', isLoggedIn, function(req, res) {
        res.render('dashboard/Currents/currents', {
            user : req.user,
            url: 'LVMSB1/js2/line-chart.js'
        });
    });

    app.get('/dashboard/LVMSB1/powers', isLoggedIn, function(req, res) {
        res.render('dashboard/Power/powers', {
            user : req.user,
            urlLineChart: 'LVMSB1/js3/line-chart.js',
            urlBarChart: 'LVMSB1/js3/bar-chart.js'
        });
    });

    app.get('/dashboard/LVMSB1/frequency', isLoggedIn, function(req, res) {
        res.render('dashboard/Frequency/frequency', {
            user : req.user,
            url: 'LVMSB1/js4/line-chart.js'
        });
    });

    app.get('/dashboard/LVMSB1/thd-big', isLoggedIn, function(req, res) {
        res.render('dashboard/THD_big/thd-big', {
            user : req.user,
            url: 'LVMSB1/js5/line-chart.js'
        });
    });

    app.get('/dashboard/LVMSB1/thd', isLoggedIn, function(req, res) {
        res.render('dashboard/thd/thd', {
            user : req.user,
            url: 'LVMSB1/js6/line-chart.js'
        });
    });

            // Dashboard/LVMSB2
    app.get('/dashboard/LVMSB2/voltages', isLoggedIn, function(req, res) {
        res.render('dashboard/Voltages/voltages', {
            user : req.user,
            url: 'LVMSB2/js/line-chart.js'
        });
    });

    app.get('/dashboard/LVMSB2/currents', isLoggedIn, function(req, res) {
        res.render('dashboard/Currents/currents', {
            user : req.user,
            url: 'LVMSB2/js2/line-chart.js'
        });
    });

    app.get('/dashboard/LVMSB2/powers', isLoggedIn, function(req, res) {
        res.render('dashboard/Power/powers', {
            user : req.user,
            urlLineChart: 'LVMSB2/js3/line-chart.js',
            urlBarChart: 'LVMSB2/js3/bar-chart.js'
        });
    });

    app.get('/dashboard/LVMSB2/frequency', isLoggedIn, function(req, res) {
        res.render('dashboard/Frequency/frequency', {
            user : req.user,
            url: 'LVMSB2/js4/line-chart.js'
        });
    });

    app.get('/dashboard/LVMSB2/thd-big', isLoggedIn, function(req, res) {
        res.render('dashboard/THD_big/thd-big', {
            user : req.user,
            url: 'LVMSB2/js5/line-chart.js'
        });
    });

    app.get('/dashboard/LVMSB2/thd', isLoggedIn, function(req, res) {
        res.render('dashboard/thd/thd', {
            user : req.user,
            url: 'LVMSB2/js6/line-chart.js'
        });
    });

                // Dashboard/LVMSB3
    app.get('/dashboard/LVMSB3/voltages', isLoggedIn, function(req, res) {
        res.render('dashboard/Voltages/voltages', {
            user : req.user,
            url: 'LVMSB3/js/line-chart.js'
        });
    });

    app.get('/dashboard/LVMSB3/currents', isLoggedIn, function(req, res) {
        res.render('dashboard/Currents/currents', {
            user : req.user,
            url: 'LVMSB3/js2/line-chart.js'
        });
    });

    app.get('/dashboard/LVMSB3/powers', isLoggedIn, function(req, res) {
        res.render('dashboard/Power/powers', {
            user : req.user,
            urlLineChart: 'LVMSB3/js3/line-chart.js',
            urlBarChart: 'LVMSB3/js3/bar-chart.js'
        });
    });

    app.get('/dashboard/LVMSB3/frequency', isLoggedIn, function(req, res) {
        res.render('dashboard/Frequency/frequency', {
            user : req.user,
            url: 'LVMSB3/js4/line-chart.js'
        });
    });

    app.get('/dashboard/LVMSB3/thd-big', isLoggedIn, function(req, res) {
        res.render('dashboard/THD_big/thd-big', {
            user : req.user,
            url: 'LVMSB3/js5/line-chart.js'
        });
    });

    app.get('/dashboard/LVMSB3/thd', isLoggedIn, function(req, res) {
        res.render('dashboard/thd/thd', {
            user : req.user,
            url: 'LVMSB3/js6/line-chart.js'
        });
    });
}