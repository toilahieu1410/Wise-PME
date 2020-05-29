var mongoose = require('mongoose');

var alarmSchema972 = mongoose.Schema({
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

var Alarm972 = mongoose.model('alarm972', alarmSchema972);
module.exports = Alarm972