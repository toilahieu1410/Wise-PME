
var mongoose = require('mongoose');

var powerdaydhs = mongoose.Schema({
        powerHourDh: Number,
        Time: String,
        CreateAt: Date
});

var powerDayDh = mongoose.model('powerdaydhs', powerdaydhs);
module.exports = powerDayDh