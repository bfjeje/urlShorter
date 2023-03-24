const express = require('express');
const pool = require('../helpers/database')
const router = express.Router();

const URL_START = "http://short.by/";

/**
 * @module urlShorterService
 */

/***Ponto 1: Um método de encurtar uma URL persistindo-a no banco de dados.***/

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

/***Ponto 2: um método que retorna uma url encurtada conforme um id.***/
router.get('/:id', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM url WHERE id=?'
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
    }catch (error){
        res.status(400).send(error.message)
    }
});

/***Ponto 3: um método que retorna todas as URLs encurtadas em uma data específica.***/
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

/***Ponto 4: um método que retorna uma url encurtada conforme o encurtamento da URL.***/
router.post('/shorturl', async function (req, res) {
    const {encurtamento} = req.body;

    try {
        const sqlQuery =
            "SELECT DISTINCT urlshort FROM url WHERE urlshort = ?"
        const rows = await pool.query(sqlQuery, URL_START+encurtamento);
        res.status(200).json(rows);
    }catch (error){
        res.status(400).send(error.message)
    }
});

/**
 * Cria uma URL curta completa de forma aleatoria.
 *
 * @returns {string} - urlCurta completa
 */
function getRandomURL() {

    return URL_START+Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
}

module.exports = router;