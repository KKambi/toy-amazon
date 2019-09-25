var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
    title: 'Amazon.com: Amazon Prime',
    user_id: req.user.user_id,
    name: req.user.name
  });
});

module.exports = router;
