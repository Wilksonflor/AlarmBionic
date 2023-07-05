const mongoose = require("mongoose");

const alarmSchema = new mongoose.Schema({
  serial: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  diveceType: {
    type: Number,
    required: true,
  },
});

const Alarm = mongoose.model("alarms", alarmSchema);

module.exports = Alarm;
