var request = require('request');
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

        //HOMEPAGE
        app.get('/homepage/homepage', isLoggedIn, async(req, res)=> {
            res.render('homepage/homepage', {
                user : req.user
            })
        })

            // DIAGRAM
        app.get('/diagram/map1', isLoggedIn, async(req, res) => {
            try{
                var result1 = await alarmMax87.find().exec();
                request('http://10.10.15.20:1880/lvmsb-diagram', {json : true}, function(error, response, body) {
                    var result2 = body
                    res.render('diagram/map1', {
                        user : req.user,
                        data1 : result1,
                        data2 : result2
                    });
                })
                
            } catch (error) {
                res.status(500).send(error);
            }
        })

        app.get('/test', async(req, res) => {
            try{
                var result1 = await alarmMax87.find().exec();
                res.send(result1)
                
            } catch (error) {
                res.status(500).send(error);
            }
        })
        app.get('/diagram/map1', isLoggedIn, function(req, res) {
        
            res.render('diagram/map1', {
                user : req.user,
         
            });
        });
        app.get('/diagram/map2', isLoggedIn, function(req, res) {
            res.render('diagram/map2', {
                user : req.user
            });
        });
        app.get('/diagram/map3', isLoggedIn, function(req, res) {
            res.render('diagram/map3', {
                user : req.user
            });
        });
}