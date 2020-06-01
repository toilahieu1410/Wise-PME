var Alarm = require('../models/alarm');
var Alarm972 = require('../models/alarm972');
var AlarmDH = require('../models/alarmDH');

var alarmMax87 = require('../models/alarmMax87');
var User = require('../models/user');
var XLSX = require('xlsx');
var moment = require('moment');

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

           // Alarm
            //Do du lieu LVMSB1
            app.get('/alarm/LVMSB1/:page',isLoggedIn , function(req, res, next) {
                var perPage = 6
                var page = req.params.page || 1
            
                Alarm
                    .find().sort({_id: -1})
                    .skip((perPage * page) - perPage)
                    .limit(perPage)
                    .exec(function(err, data) {
                        Alarm.count().exec(function(err, count) {
                            if (err) return next(err)
                            res.render('alarm/alarm', {
                                user : req.user,
                                data: data,
                                current: page,
                                pages: Math.ceil(count / perPage),
                                device: 'LVMSB1',
                                moment: moment
                            })
                        })
                    })
            })

            //Export XLSX
            app.post('/exportLVMSB1', function(req, res){
                var wb = XLSX.utils.book_new();
                Alarm.find(function(err,data){
                    if(err) {
                        console.log(err)
                    } else {
                        var temp = JSON.stringify(data);
                        temp = JSON.parse(temp);
                        var ws = XLSX.utils.json_to_sheet(temp);
                        var down = __dirname+'D:\2\exportdata.xlsx'
                        XLSX.utils.book_append_sheet(wb, ws, 'sheet1');
                        XLSX.writeFile(wb,down);
                        res.download(down);
                    }
                });
            });

            // Search data
            app.get('/alarm/search/LVMSB1', function(req, res) {
                var name_search = req.query.name;
                var result = Alarm.find({Type: name_search}, function(err, data){
                    console.log(data);
                    res.render('alarm/menu/search', {
                        data: data,
                        user: req.user,
                        device: 'LVMSB1',
                        moment: moment
                    })
                })
            })
            

            // Sua du lieu LVMSB1
            app.get('/alarm/edit/LVMSB1/:id', authRole('admin', 'user'), isLoggedIn, function(req, res, next) {
                var id2 = req.params.id;
                Alarm.find({ _id : id2}, function(err, data) {
                    res.render('alarm/menu/edit', {
                        user : req.user,
                        data: data,
                        device: 'LVMSB1',
                        moment: moment
                    });
                })
            })
            app.post('/alarm/edit/LVMSB1/:id', function(req, res, next) {
                var id = req.params.id;
                let timeMoment = moment(new Date()).format('DD/MM/YYYY-hh:mm:ss')
                Alarm.findById(id, function(err, data) {
                    data.Note = req.body.Note;
                    data.Userid = req.body.Userid;
                    data.UpdateAt = timeMoment;
                    data.Userid = req.user.local.email;
                    data.isDone = true;
                    data.save();
                    res.redirect('/alarm/LVMSB1/1');
                });
            })
            // Xoa du lieu
            app.get('/alarm/remove/LVMSB1/:id',authRole('admin', 'user'), function(req, res, next) {
                var id = req.params.id;
                Alarm.findByIdAndRemove(id).exec();
                res.redirect('/alarm/LVMSB1/1')
            })
            

            //Do du lieu LVMSB2
            app.get('/alarm/LVMSB2/:page',isLoggedIn , function(req, res, next) {
                var perPage = 6
                var page = req.params.page || 1
            
                Alarm972
                    .find().sort({_id: -1})
                    .skip((perPage * page) - perPage)
                    .limit(perPage)
                    .exec(function(err, data) {
                        Alarm972.count().exec(function(err, count) {
                            if (err) return next(err)
                            res.render('alarm/alarm', {
                                user : req.user,
                                data: data,
                                current: page,
                                pages: Math.ceil(count / perPage),
                                device: 'LVMSB2',
                                moment: moment
                            })
                        })
                    })
            })
            // Search data
            app.get('/alarm/search/LVMSB2', function(req, res) {
                var name_search = req.query.name;
                var result = Alarm972.find({Type: name_search}, function(err, data){
                    console.log(data);
                    res.render('alarm/menu/search', {
                        data: data,
                        user: req.user,
                        device: 'LVMSB2',
                        moment: moment
                    })
                })
            })
            //Export XLSX
            app.post('/exportLVMSB2', function(req, res){
                var wb = XLSX.utils.book_new();
                Alarm972.find((err,data)=>{
                    if(err) {
                        console.log(err)
                    } else {
                        var temp = JSON.stringify(data);
                        temp = JSON.parse(temp);
                        var ws = XLSX.utils.json_to_sheet(temp);
                        var down = __dirname+'D:\2\exportdata.xlsx'
                        XLSX.utils.book_append_sheet(wb, ws, 'sheet1');
                        XLSX.writeFile(wb,down);
                        res.download(down);
                    }
                });
            });

            // Sua du lieu LVMSB2
            app.get('/alarm/edit/LVMSB2/:id', authRole('admin', 'user'), isLoggedIn, function(req, res, next) {
                var id2 = req.params.id;
                Alarm972.find({ _id : id2}, function(err, data) {
                    
                    res.render('alarm/menu/edit', {
                        user : req.user,
                        data: data,
                        device: 'LVMSB2',
                        moment: moment
                    });
                    
                })
            })
            app.post('/alarm/edit/LVMSB2/:id', function(req, res, next) {
                var id = req.params.id;
                let timeMoment = moment(new Date()).format('DD/MM/YYYY-hh:mm:ss')
                Alarm972.findById(id, function(err, data) {
                    data.Note = req.body.Note;
                    data.Userid = req.body.Userid;
                    data.UpdateAt = timeMoment;
                    data.Userid = req.user.local.email;
                    data.isDone = true;
                    data.save();
                    res.redirect('/alarm/LVMSB2/1');
                });
            })
            // Xoa du lieu
            app.get('/alarm/remove/LVMSB2/:id',authRole('admin', 'user'), function(req, res, next) {
                var id = req.params.id;
                Alarm972.findByIdAndRemove(id).exec();
                res.redirect('/alarm/LVMSB2/1')
            })



            //Do du lieu LVMSB3
            app.get('/alarm/LVMSB3/:page',isLoggedIn , function(req, res, next) {
                var perPage = 6
                var page = req.params.page || 1
            
                AlarmDH
                    .find().sort({_id: -1})
                    .skip((perPage * page) - perPage)
                    .limit(perPage)
                    .exec(function(err, data) {
                        // var data1 = data.reverse()
                        AlarmDH.count().exec(function(err, count) {
                            if (err) return next(err)
                            res.render('alarm/alarm', {
                                user : req.user,
                                data: data,
                                current: page,
                                pages: Math.ceil(count / perPage),
                                device: 'LVMSB3',
                                moment: moment
                            })
                        })
                    })
            })
            // Search data
            app.get('/alarm/search/LVMSB3', function(req, res) {
                var name_search = req.query.name;
                var result = AlarmDH.find({Type: name_search}, function(err, data){
                    console.log(data);
                    res.render('alarm/menu/search', {
                        data: data,
                        user: req.user,
                        device: 'LVMSB3',
                        moment: moment
                    })
                })
            })
            //Export XLSX
            app.post('/exportLVMSB3', function(req, res){
                var wb = XLSX.utils.book_new();
                AlarmDH.find((err,data)=>{
                    if(err) {
                        console.log(err)
                    } else {
                        var temp = JSON.stringify(data);
                        temp = JSON.parse(temp);
                        var ws = XLSX.utils.json_to_sheet(temp);
                        var down = __dirname+'D:\2\exportdata.xlsx'
                        XLSX.utils.book_append_sheet(wb, ws, 'sheet1');
                        XLSX.writeFile(wb,down);
                        res.download(down);
                    }
                });
            });

            // Sua du lieu LVMSB3
            app.get('/alarm/edit/LVMSB3/:id', authRole('admin', 'user'), isLoggedIn, function(req, res, next) {
                var id2 = req.params.id;
                AlarmDH.find({ _id : id2}, function(err, data) {
                    
                    res.render('alarm/menu/edit', {
                        user : req.user,
                        data: data,
                        device: 'LVMSB3',
                        moment: moment
                    });
                    
                })
            })
            app.post('/alarm/edit/LVMSB3/:id', function(req, res, next) {
                var id = req.params.id;
                let timeMoment = moment(new Date()).format('DD/MM/YYYY-hh:mm:ss')
                AlarmDH.findById(id, function(err, data) {
                    data.Note = req.body.Note;
                    data.Userid = req.body.Userid;
                    data.UpdateAt = timeMoment;
                    data.Userid = req.user.local.email;
                    data.isDone = true;
                    data.save();
                    res.redirect('/alarm/LVMSB3/1');
                });
            })
            // Xoa du lieu
            app.get('/alarm/remove/LVMSB3/:id',authRole('admin', 'user'), function(req, res, next) {
                var id = req.params.id;
                AlarmDH.findByIdAndRemove(id).exec();
                res.redirect('/alarm/LVMSB3/1')
            })
  
}