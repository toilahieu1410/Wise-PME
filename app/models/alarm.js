// app/models/user.js   dinh nghia lop nguoi dung
var mongoose = require('mongoose');

var alarmSchema87 = mongoose.Schema({
        Device : String,
        Type: String,
        Value: String,
        Unit: String,
        Overload: String,
        CreatAt: String,
        UpdateAt: String,
        Userid: String,
        Note: String,
        isDone: Boolean
});

var Alarm = mongoose.model('alarm87', alarmSchema87);
module.exports = Alarm
