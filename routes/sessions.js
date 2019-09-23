/* import library */
const express = require('express');
const router = express.Router();
const session = require('express-session');
const redis = require('redis')

// import util
const constant = require('../src/utils/constant.js')

// Session setting
let RedisStore = require('connect-redis')(session)
let client = redis.createClient()
app.use(session({
    name: "amazon_session_id",
    genid: function(req){
        return uuid;    //uuid 라이브러리릍 통해 세션id 반환
    },
    store: new RedisStore({ client }),
    secret: 'asadlfkj!@#!@#dfgasdg',    //TODO: hash를 위한 문자열이래
    resave: true,
    saveUninitialized: false,
    cookie: constant.COOKIE_OPTIONS
}))

// GET to login page
router.get('/new', function (req, res, next) {
    const valid = req.query.valid;
    res.render('todo_login', { valid: valid });
});

// POST for login
router.post('/create', function (req, res, next) {
    const id = req.body.id
    const password = req.body.password

    if (Users.isRegistered(id) && Users.isCorrectPassword(id, password)){
        const uuid = createUniqueId()
        const name = Users.getName(id)

        Sessions.create(uuid, id, name)

        res.cookie(SESSION_ID_VARIABLE_NAME, uuid, COOKIE_OPTIONS)
        res.redirect(INDEX_PATH)
    }
    else{
        res.redirect('./new?valid=false')
    }
})

// POST for logout
router.post('/destroy', function (req, res, next){
    const sessionId = req.cookies.sessionId
    if (Sessions.isRegistered(sessionId) === true){
        Sessions.destroy(sessionId)     //서버 측 세션ID 삭제
        res.clearCookie(SESSION_ID_VARIABLE_NAME)   //클라이언트 측 쿠키 삭제
    }
    res.redirect(INDEX_PATH)
})

module.exports = router;
