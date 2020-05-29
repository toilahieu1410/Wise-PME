
var mongoose = require('mongoose');

var powerday972 = mongoose.Schema({
        powerHour972: Number,
        Time: String,
        CreateAt: Date
});

var powerDay972 = mongoose.model('powerday972', powerday972);
module.exports = powerDay972