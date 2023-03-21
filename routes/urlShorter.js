const express = require('express');
const pool = require('../helpers/database')
const router = express.Router();

router.get('/:id', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM url WHERE id=?'
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
    }catch (error){
        res.status(400).send(error.message)
    }
});

router.post('/all', async function (req, res) {
    const {dateTime} = req.body;

    try {
        const sqlQuery =
            "SELECT DISTINCT urlshort FROM url WHERE DATE_FORMAT(created_at, '%Y-%m-%d') = ?"
        const rows = await pool.query(sqlQuery, dateTime);
        res.status(200).json(rows);
    }catch (error){
        res.status(400).send(error.message)
    }
});

router.post('/encurtar', async function (req, res){
    try {
        const {urlLonga} = req.body;

        const urlCurta = getRandomURL();
        const sqlQuery = 'INSERT INTO url(urlshort, urllong) VALUES (?, ?)'
        const result = await pool.query(sqlQuery, [urlCurta, urlLonga]);

        res.status(200).json({id: Number.parseInt(result.insertId)});
    }catch (error){
        console.log(error);
        res.status(400).send(error.message);
    }
})

function getRandomURL() {
    return "http://short.by/"+Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
}

module.exports = router;