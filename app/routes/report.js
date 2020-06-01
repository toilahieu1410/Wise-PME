var Alarm = require('../models/alarm');
var Alarm972 = require('../models/alarm972');
var AlarmDH = require('../models/alarmDH');
var powerH87 = require('../models/power87');

var powerH87 = require('../models/power87');
var powerH972 = require('../models/power972');
var powerHDH = require('../models/powerDh');

var powerHour87 = require('../models/powerHour87');
var powerHour972 = require('../models/powerHour972');
var powerHourDh = require('../models/powerHourDh');

var powerDay87 = require('../models/powerDay87');
var powerDay972 = require('../models/powerDay972');
var powerDayDh = require('../models/powerDayDh');

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

          // REPORT
    
            // VOLTAGES
        app.get('/reports/voltages/LVMSB1', isLoggedIn, function(req, res) {
            res.render('reports/voltages/voltages', {
                user : req.user,
                url: 'line&barchart87.js'
            });
        });

        app.get('/reports/voltages/LVMSB2', isLoggedIn, function(req, res) {
            res.render('reports/voltages/voltages', {
                user : req.user,
                url: 'line&barchart972.js'
            });
        });

        app.get('/reports/voltages/LVMSB3', isLoggedIn, function(req, res) {
            res.render('reports/voltages/voltages', {
                user : req.user,
                url: 'line&barchartDH.js'
            });
        });

            //CURRENTS
        app.get('/reports/currents/LVMSB1', isLoggedIn, function(req, res) {
            res.render('reports/currents/currents', {
                user : req.user,
                url: 'line&barchart87.js'
            });
        });

        app.get('/reports/currents/LVMSB2', isLoggedIn, function(req, res) {
            res.render('reports/currents/currents', {
                user : req.user,
                url: 'line&barchart972.js'
            });
        });

        app.get('/reports/currents/LVMSB3', isLoggedIn, function(req, res) {
            res.render('reports/currents/currents', {
                user : req.user,
                url: 'line&barchartDH.js'
            });
        });

            // THD
        app.get('/reports/thd-big/LVMSB1', isLoggedIn, function(req, res) {
            res.render('reports/thd-big/thd-big', {
                user : req.user,
                url: 'line&barchart87.js'
            });
        });

        app.get('/reports/thd-big/LVMSB2', isLoggedIn, function(req, res) {
            res.render('reports/thd-big/thd-big', {
                user : req.user,
                url: 'line&barchart972.js'
            });
        });

        app.get('/reports/thd-big/LVMSB3', isLoggedIn, function(req, res) {
            res.render('reports/thd-big/thd-big', {
                user : req.user,
                url: 'line&barchartDH.js'
            });
        });

            // thd
        app.get('/reports/thd/LVMSB1', isLoggedIn, function(req, res) {
            res.render('reports/thd/thd', {
                user : req.user,
                url: 'line&barchart87.js'
            });
        });

        app.get('/reports/thd/LVMSB2', isLoggedIn, function(req, res) {
            res.render('reports/thd/thd', {
                user : req.user,
                url: 'line&barchart972.js'
            });
        });

        app.get('/reports/thd/LVMSB3', isLoggedIn, function(req, res) {
            res.render('reports/thd/thd', {
                user : req.user,
                url: 'line&barchartDH.js'
            });
        });

            // POWER
        app.get('/reports/power', isLoggedIn, function(req, res) {
            res.render('reports/power/power', {
                user : req.user
            });
        });


            // TIM KIEM THEO GIO
    app.get('/datetime_hour', isLoggedIn, function(req, res) {
        res.render('reports/power/datetime_hour', {
            user : req.user,
            action: 'power_hour'
        });
    });
        
    app.get('/power_hour', async (req, res, next) => {
        var start_date = (req.query.startDate);
        var end_date = (req.query.endDate);
        let powerH87 = await powerHour87.find({
            'CreateAt': {'$gte': new Date(start_date), '$lte': new Date(end_date)}
        })
        let powerH972 = await powerHour972.find({
            'CreateAt': {'$gte': new Date(start_date), '$lte': new Date(end_date)}
        })
        let powerHDh = await powerHourDh.find({
            'CreateAt': {'$gte': new Date(start_date), '$lte': new Date(end_date)}
        })

        res.render('reports/power/power_hour', {
            user : req.user,
            powerH87: powerH87,
            powerH972: powerH972,
            powerHDh: powerHDh,
            start_date: start_date,
            end_date: end_date,
            title: 'Biểu đồ tiêu thụ điện theo giờ',
            action: 'datetime_hour'
        });
    })

        // TIM KIEM THEO NGAY
    app.get('/datetime_day', isLoggedIn, function(req, res) {
        res.render('reports/power/datetime_hour.ejs', {
            user : req.user,
            action: 'power_day'
        });
    });

    app.get('/power_day', async (req, res, next) => {
        var start_date = (req.query.startDate);
        var end_date = (req.query.endDate);
        let powerH87 = await powerDay87.find({
            'CreateAt': {'$gte': new Date(start_date), '$lte': new Date(end_date)}
        })
        let powerH972 = await powerDay972.find({
            'CreateAt': {'$gte': new Date(start_date), '$lte': new Date(end_date)}
        })
        let powerHDh = await powerDayDh.find({
            'CreateAt': {'$gte': new Date(start_date), '$lte': new Date(end_date)}
        })
        res.render('reports/power/power_hour', {
            user : req.user,
            powerH87: powerH87,
            powerH972: powerH972,
            powerHDh: powerHDh,
            start_date: start_date,
            end_date: end_date,
            title: 'Biểu đồ tiêu thụ điện theo ngày',
            action: 'datetime_day'
        });
    })

    // TIM KIEM SO DIEN
    app.get('/datetime_energy', isLoggedIn, function(req, res) {
        res.render('reports/power/datetime_hour.ejs', {
            user : req.user,
            action: 'energy_reveiced'
        });
    });

    app.get('/energy_reveiced', async (req, res, next) => {
        let start_date = (req.query.startDate);
        let end_date = (req.query.endDate);
        let power87 = await powerH87.find({
            'CreateAt': {'$gte': new Date(start_date), '$lte': new Date(end_date)}
        })
        let power972 = await powerH972.find({
            'CreateAt': {'$gte': new Date(start_date), '$lte': new Date(end_date)}
        })
        let powerDH = await powerHDH.find({
            'CreateAt': {'$gte': new Date(start_date), '$lte': new Date(end_date)}
        })
        res.render('reports/power/energy_reveiced', {
            user : req.user,
            power87: power87,
            power972: power972,
            powerDH: powerDH,
            start_date: start_date,
            end_date: end_date,
            title: 'Biểu đồ điện tiêu thụ',
            action: 'energy_reveiced'
        });
    })

}