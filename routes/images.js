const express = require('express');
const path = require('path')
const router = express.Router();
const fs = require('fs');

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

/*
<li class="mini-carousel-card">
                                    <a class="img-link">
                                        <img src="/images/Sub_Card_A/Sub_Card_A01.jpg" alt="Homecoming New Series">
                                    </a>
                                </li>
                                <li class="mini-carousel-card">
                                    <a class="img-link">
                                        <img src="/images/Sub_Card_A/Sub_Card_A02.jpg" alt="The Man in the High Castle">
                                    </a>
                                </li>
                                <li class="mini-carousel-card">
                                    <a class="img-link">
                                        <img src="/images/Sub_Card_A/Sub_Card_A03.jpg" alt="The Marvelous Mrs.Meisel">
                                    </a>
                                </li>
                                <li class="mini-carousel-card">
                                    <a class="img-link">
                                        <img src="/images/Sub_Card_A/Sub_Card_A04.jpg" alt="Tom Clansy's Jack Lyan">
                                    </a>
                                </li> */