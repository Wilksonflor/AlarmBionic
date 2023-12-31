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
  },
  createdAt:{
    type: Date,
    default: Date.now,
  }
});

const Alarm = mongoose.model("alarms", alarmSchema);

module.exports = Alarm;
