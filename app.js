var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

mongoose.connect(configDB.url); // connect tới database 


require('./config/passport')(passport); // 

// Cấu hình ứng dụng express
app.use('/static', express.static(__dirname + '/public'));
app.use(morgan('dev')); // sử dụng để log mọi request ra console
app.use(cookieParser()); // sử dụng để đọc thông tin từ cookie
app.use(bodyParser()); // lấy thông tin từ form HTML

app.set('view engine', 'ejs'); // chỉ định view engine là ejs


app.use(session({ secret: 'xxxxxxxxxxxxx' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./app/routes.js')(app, passport); // load các routes từ các nguồn
require('./app/routes/dashboard')(app, passport);
require('./app/routes/trend')(app, passport);
require('./app/routes/alarm')(app, passport);
require('./app/routes/report')(app, passport);
require('./app/routes/diagram')(app, passport);
require('./app/routes/setting')(app, passport);
app.listen(port);