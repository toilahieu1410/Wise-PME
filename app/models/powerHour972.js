
var mongoose = require('mongoose');

var powerhour972 = mongoose.Schema({
        powerHour972: Number,
        Time: String,
        CreateAt: Date
});

var powerHour972 = mongoose.model('powerhour972', powerhour972);
module.exports = powerHour972