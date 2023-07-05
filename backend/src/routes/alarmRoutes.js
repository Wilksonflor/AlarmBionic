const express = require('express');
const router = express.Router();
const axios = require('axios');
const Alarm = require('../model/alarmModel');

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.post('/alarmes', async (req, res) => {
  const alarmData = req.body;

  try {
    const newAlarm = await Alarm.create(alarmData);
    console.log('Created alarm:', newAlarm);
    res.json(newAlarm);

    setInterval(async () => {
      const data = {
        serial: '123456789',
        type: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        checked: false,
        deviceType: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      };

      try {
        const newAlarm = await Alarm.create(data);
        console.log('Created alarm:', newAlarm);
      } catch (error) {
        console.error('Error creating alarm:', error);
      }
    }, 5000);
  } catch (error) {
    console.error('Error creating alarm:', error);
    res.status(500).json({ error: 'Failed to create alarm' });
  }
});

module.exports = router;
