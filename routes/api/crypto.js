const express = require('express');
const request = require('request');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const router = express.Router();

// Get all coins
router.get('/', async (req, res) => {
  await request('https://www.cryptocompare.com/api/data/coinlist/', (error, response, body) => {
    if (error) {
      console.log(error);
      throw error;
    }
    const jsonObject = JSON.parse(body);
    console.log(jsonObject.Data.HST);
    return res.send(jsonObject.Data.HST);
  });
});

module.exports = router;
