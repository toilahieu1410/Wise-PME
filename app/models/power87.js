// app/models/user.js   dinh nghia lop nguoi dung
var mongoose = require('mongoose');

var power87 = mongoose.Schema({
        powerH: Number,
        Time: String,
        CreateAt: Date
});

var powerH87 = mongoose.model('power87', power87);
module.exports = powerH87