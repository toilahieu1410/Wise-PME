// app/models/user.js   dinh nghia lop nguoi dung
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
        role         : String
    }

});

// Các phương thức ======================
// Tạo mã hóa mật khẩu
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// kiểm tra mật khẩu có trùng khớp
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
