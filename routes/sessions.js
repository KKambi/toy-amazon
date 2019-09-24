/* import library */
const express = require('express');
const router = express.Router();

// import util
const cookie = require('../src/utils/cookie_util.js')

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
    req.session.destroy((err) => {
        if (err) console.log(err);
    });
    res.clearCookie(cookie.SESSION_NAME);
    res.redirect('/')
})

module.exports = router;
