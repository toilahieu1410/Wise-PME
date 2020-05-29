
var mongoose = require('mongoose');

var powerhour87 = mongoose.Schema({
        powerHour87: Number,
        Time: String,
        CreateAt: Date
});

var powerHour87 = mongoose.model('powerhour87', powerhour87);
module.exports = powerHour87