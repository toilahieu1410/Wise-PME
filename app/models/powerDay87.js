
var mongoose = require('mongoose');

var powerday87 = mongoose.Schema({
        powerHour87: Number,
        Time: String,
        CreateAt: Date
});

var powerDay87 = mongoose.model('powerday87', powerday87);
module.exports = powerDay87