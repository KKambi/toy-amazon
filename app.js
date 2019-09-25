//import module
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const favicon = require('serve-favicon')
const passport = require('passport');
const session = require('express-session');
const redis = require('redis');
require('dotenv').config();

//import router
const indexRouter = require('./routes/index');
const imagesRouter = require('./routes/images');
const sessionsRouter = require('./routes/sessions');
const adminRouter = require('./routes/admin.js')

// import util
const cookie = require('./src/utils/cookie_util.js')
const uuid = require('./src/utils/uuid_util.js')

//create express-server
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// Session setting
let RedisStore = require('connect-redis')(session)
let client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: 6379,
    password: process.env.REDIS_PASSWORD
})
app.use(session({
    name: cookie.SESSION_NAME,
    genid: function(req){
        return uuid.createUniqueId();  //uuid 라이브러리릍 통해 세션id 반환
    },
    store: new RedisStore({ client }),
    secret: cookie.SESSION_SECRET,  //hash를 위한 비밀키
    resave: false,
    saveUninitialized: false,  //FIXME: passport.js와 관련이슈
    cookie: cookie.COOKIE_OPTIONS
}))
app.use(passport.initialize());
app.use(passport.session());
require('./src/javascripts/passport.js').config();

// routing
app.use('/', indexRouter);
app.use('/images', imagesRouter);
app.use('/sessions', sessionsRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
