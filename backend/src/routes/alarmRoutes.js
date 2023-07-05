const express = require('express');
const router = express.Router();
const axios = require('axios');
const Alarm = require('../model/alarmModel');

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.post('/alarmes', async (req, res) => {
  
});

module.exports = router;
