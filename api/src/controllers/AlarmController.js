const Alarm = require("../model/alarmModel");
const alarmRoutes = require("../routes/alarmRoutes");
const axios = require("axios");

exports.createAlarm = async (req, res) => {
  console.log("chegou do post", req.body);
  const { serial, type, checked, deviceType, createdAt } = req.body;

  try {
    const createdAt = new Date();
    const alarm = await Alarm.create({
      serial,
      type,
      checked,
      deviceType,
      createdAt,
    });

    res.status(201).json({ msg: "Alarme criado com sucesso", alarm });
  } catch (error) {
    console.log("erro", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAlarms = async (req, res) => {
  console.log("chegou do get All", req.body);
  try {
    const alarms = await Alarm.find();
    res.status(200).json(alarms);
  } catch (error) {
    console.log("erro", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getOneAlarm = async (req, res) => {
  console.log("chegou do get id", req.body);
  const { id } = req.params;
  try {
    const alarm = await Alarm.findById(id);
    if (!alarm) {
      res.status(404).json({ msg: "Alarme não encontrado" });
      return;
    }
    res.status(200).json(alarm);
  } catch (error) {
    console.log("erro ao localizar alarme pelo ID", error);
    res.status(500).json({ error: error.message });
  }
};

exports.updateOneAlarm = async (req, res) => {
  const { id } = req.params;
  const { serial, type, checked, deviceType, createdAt } = req.body;

  try {
    const alarm = await Alarm.findByIdAndUpdate(
      id,
      { serial, type, checked, deviceType, createdAt },
      { new: true }
    );
    if (!alarm) {
      res.status(404).json({ msg: "Alarme não encontrado" });
      return;
    }
    res.status(200).json(alarm);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.deleteOneAlarm = async (req, res) => {
  const { id } = req.params;

  try {
    const alarm = await Alarm.findByIdAndDelete(id);
    if (!alarm) {
      res.status(404).json({ msg: "Alarme não encontrado" });
      return;
    }
    res.status(200).json({ msg: "Alarme removido com sucesso" });
  } catch (error) {
    console.log("erro", error);
    res.status(500).json({ error: error });
  }
};

