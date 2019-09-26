var express = require('express');
var router = express.Router();

//import Model
const { User } = require('../src/model/User.js')

/* GET Admin Page */
router.get('/users/all', async function(req, res, next) {
    const rows = await User.findAll()
    res.json(rows);
});

module.exports = router;
