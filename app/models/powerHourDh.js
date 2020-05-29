
var mongoose = require('mongoose');

var powerhourdh = mongoose.Schema({
        powerHourDh: Number,
        Time: String,
        CreateAt: Date
});

var powerHourDh = mongoose.model('powerhourdhs', powerhourdh);
module.exports = powerHourDh