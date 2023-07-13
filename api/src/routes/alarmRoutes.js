const express = require('express');
const alarmController = require('../controllers/AlarmController');

const router = express.Router();

router.get('/', alarmController.getAllAlarms);
router.post('/', alarmController.createAlarm);
router.get('/alarmbyid/:id', alarmController.getOneAlarm);


module.exports = router;
