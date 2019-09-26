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
router.post('/users/admin/create', async function(req, res, next) {
    const user_id = req.body.user_id
    await AdminController.setAdmin(user_id)
    res.redirect('/admin')
});

/* Dismiss User to admin */
router.post('/users/admin/destroy', async function(req, res, next) {
    const user_id = req.body.user_id
    await AdminController.dismissAdmin(user_id)
    res.redirect('/admin')
});

module.exports = router;
