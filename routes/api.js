var express = require('express');
var router = express.Router();

//import library
const multer = require('multer')
const upload = multer({
    storage: multer.memoryStorage()
})

//import Controller
const { Admin } = require('../src/controller/Admin.js')
const AdminController = new Admin();

//import Mdel
const { ObjectStorage } = require('../src/model/ObjectStorage.js')

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

/* GET Item */
router.get('/items/:id', async function(req, res, next){
    const row = await AdminController.getItem(req.params.id)
    res.json(row);
})

/* Create item */
router.post('/items/create', upload.single('image'), async function(req, res, next) {
    //Buffer to stream
    const name = req.file.originalname
    const imageBuffer = req.file.buffer

    //Upload to S3
    await ObjectStorage.uploadObject(name, imageBuffer)

    //Get URL
    const url = await ObjectStorage.getObjectUrl(name)

    //Insert item in MySQL
    const carousel_id = req.body.carousel_id
    const params = {
        carousel_id,
        name,
        url
    }
    await AdminController.createItem(params)
    res.redirect('/admin')
});

module.exports = router;
