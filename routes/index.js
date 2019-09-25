var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let signed = false;
    let user_id = "";
    let name = "";
    let isAdmin = false;
    if (req.user){
        signed = true;
        user_id = req.user.user_id;
        name = req.user.name;
        isAdmin = req.user.admin === 1 ? true : false
    }
    res.render('index', { 
        title: 'Amazon.com: Amazon Prime',
        signed: signed,
        user_id,
        name,
        isAdmin
    });
});

module.exports = router;
