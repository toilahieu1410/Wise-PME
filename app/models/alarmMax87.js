// app/models/user.js   dinh nghia lop nguoi dung
var mongoose = require('mongoose');

var alarmMax87db = mongoose.Schema({
        Device: String,
        CurrentMax: Number,
        VolUMax: Number,
        VolVMax: Number,
        THDBigMax: Number,
        thdMax: Number
});

var alarmMax87 = mongoose.model('alarmmax87', alarmMax87db);
module.exports = alarmMax87