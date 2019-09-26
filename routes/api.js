var express = require('express');
var router = express.Router();

//import Model
const { Admin } = require('../src/controller/Admin.js')
const AdminController = new Admin();

/* GET User list */
router.get('/users/all', async function(req, res, next) {
    const rows = await AdminController.getUserList()
    res.json(rows);
});

/* SET User to admin */
router.get('/')

module.exports = router;
