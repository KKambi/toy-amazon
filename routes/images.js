const express = require('express');
const path = require('path')
const router = express.Router();
const fs = require('fs');

router.get('/main', function (req, res, next) {
    const dir = path.join(__dirname, `../public/images/Main_Card`)
    const fileList = fs.readdirSync(dir)
    const filePathList = []

    fileList.forEach((filename) => {
        const filePath = path.join(`/images/Main_Card`, filename)
        filePathList.push(filePath)
    })
    res.send(filePathList)
});

router.get('/sub/:type', function (req, res, next) {
    const type = req.params.type
    const dir = path.join(__dirname, `../public/images/Sub_Card_${type}`)
    const fileList = fs.readdirSync(dir)
    const filePathList = []

    fileList.forEach((filename) => {
        const filePath = path.join(`/images/Sub_Card_${type}`, filename)
        filePathList.push(filePath)
    })
    res.send(filePathList)
});

module.exports = router;