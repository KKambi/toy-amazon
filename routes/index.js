var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let signed = false;
    let user_id = "";
    let name = "";
    if (req.user){
        signed = true;
        user_id = req.user.user_id;
        name = req.user.name;
    }
    res.render('index', { 
        title: 'Amazon.com: Amazon Prime',
        signed: signed,
        user_id,
        name
    });
});

module.exports = router;
