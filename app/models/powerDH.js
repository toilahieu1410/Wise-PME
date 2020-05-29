// app/models/user.js   dinh nghia lop nguoi dung
var mongoose = require('mongoose');

var powerDH = mongoose.Schema({
        powerH: Number,
        Time: String,
        CreateAt: Date
});

var powerHDH = mongoose.model('powerDH', powerDH);
module.exports = powerHDH