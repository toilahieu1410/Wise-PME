// app/models/user.js   dinh nghia lop nguoi dung
var mongoose = require('mongoose');

var power972 = mongoose.Schema({
        powerH: Number,
        Time: String,
        CreateAt: Date
});

var powerH972 = mongoose.model('power972', power972);
module.exports = powerH972