var express = require('express');
var router = express.Router();

/* GET Admin Page */
router.get('/', function(req, res, next) {
    //일반사용자가 url을 통해 이동한 경우를 예방
    if (req.user.admin === 0) res.redirect('/')
    
    res.render('admin', {
        title: "Amaozn Admin"
    });
});

module.exports = router;
