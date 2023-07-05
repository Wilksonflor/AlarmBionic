const Alarm = require('../models/alarmModel');

// Controlador para lidar com as requisições relacionadas a Alarme
const alarmController = {
  getAllAlarms: async (req, res) => {
    try {
      const alarms = await Alarm.find();
      res.json(alarms);
    } catch (error) {
      console.error('Error fetching alarms:', error);
      res.status(500).json({ error: 'Failed to fetch alarms' });
    }
  },

  createAlarm: async (req, res) => {
    const alarmData = req.body;

    try {
      const newAlarm = await Alarm.create(alarmData);
      console.log('Created alarm:', newAlarm);
      res.json(newAlarm);
    } catch (error) {
      console.error('Error creating alarm:', error);
      res.status(500).json({ error: 'Failed to create alarm' });
    }
  },

};

module.exports = alarmController;
