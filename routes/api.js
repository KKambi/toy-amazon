var express = require('express');
var router = express.Router();

//import library
const multer = require('multer')
const upload = multer({
    storage: multer.memoryStorage()
})

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

/* GET Carousel list */
router.get('/carousels/all', async function(req, res, next) {
    const rows = await AdminController.getCarouselList()
    res.json(rows);
});

/* Create carousel */
router.post('/carousels/create', async function(req, res, next) {
    const name = req.body.name
    const params = {
        name
    }
    await AdminController.createCarousel(params)
    res.redirect('/admin')
});

/* GET Item list */
router.get('/items/all', async function(req, res, next) {
    const rows = await AdminController.getItemList()
    res.json(rows);
});

/* Create item */
router.post('/items/create', upload.single('image'), async function(req, res, next) {
    console.log(req.file)
    console.log(req.files)

    const carousel_id = req.body.carousel_id
    const name = req.body.name
    const url = req.body.url
    const params = {
        carousel_id,
        name,
        url
    }
    await AdminController.createCarousel(params)
    res.redirect('/admin')
});

module.exports = router;
