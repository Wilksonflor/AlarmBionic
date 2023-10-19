const express = require('express');
const alarmController = require('../controllers/AlarmController');

const router = express.Router();

router.get('/', alarmController.getAllAlarms);
router.post('/', alarmController.createAlarm);
router.get('/alarmes/:id', alarmController.getOneAlarm);
// router.get('/pdf/:id', alarmController.alarmPdf)


module.exports = router;
