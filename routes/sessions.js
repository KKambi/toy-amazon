/* import library */
const express = require('express');
const router = express.Router();
const passport =  require('passport');
require('dotenv').config();

// import util
const cookie = require('../src/utils/cookie_util.js')

// GET to login page
router.get('/new', function (req, res, next) {
    const valid = req.query.valid;
    res.render('login', { 
        title: 'Amazon.com: Amazon Prime',
        valid: valid 
    });
});

// POST for login
router.post('/create', passport.authenticate('local', {
    failureRedirect: './new?valid=false'
}), (req, res) => {
    res.redirect('/')
})

// POST for logout
router.post('/destroy', function (req, res, next){
    req.logout();
    res.redirect('/')
})

module.exports = router;
