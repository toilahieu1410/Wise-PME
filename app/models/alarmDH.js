// app/models/user.js   dinh nghia lop nguoi dung
var mongoose = require('mongoose');

var alarmSchemaDH = mongoose.Schema({
        Device : String,
        Type: String,
        Value: String,
        Unit: String,
        Overload: String,
        CreatAt: String,
        UpdateAt: Date,
        Userid: String,
        Note: String,
        isDone: Boolean
});

var AlarmDH = mongoose.model('alarmdhs', alarmSchemaDH);
module.exports = AlarmDH