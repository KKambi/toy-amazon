var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Amazon.com: Amazon Prime',
    carousel_row_width: 280 
  });
});

module.exports = router;
