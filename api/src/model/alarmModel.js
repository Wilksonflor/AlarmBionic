const mongoose = require("mongoose");

const alarmSchema = new mongoose.Schema({
  serial: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  checked: {
    type: Boolean,
    required: false,
  },
  deviceType: {
    type: Number,
    required: true,
  }
});

const Alarm = mongoose.model("alarms", alarmSchema);

module.exports = Alarm;
