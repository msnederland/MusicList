const express = require('express');
const request = require('request');

const router = express.Router();

// Get all coins
router.get('/', (req, res) => {
  request('https://www.cryptocompare.com/api/data/coinlist/', function(error, response, body) {
    const jsonObject = JSON.parse(body);
    console.log(jsonObject.Data.HST);
    res.send(jsonObject.HST);
  });
});

module.exports = router;
