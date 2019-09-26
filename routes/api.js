var express = require('express');
var router = express.Router();

//import Model
const { User } = require('../src/model/User.js')

/* GET Admin Page */
router.get('/users/all', async function(req, res, next) {
    //TODO: User model을 통해서 전체 로우를 받음
    const rows = await User.findAll()

    //TODO: 전체 로우를 돌려줌
    res.json(rows);
});

module.exports = router;
