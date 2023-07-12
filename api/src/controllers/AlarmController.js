const Alarm = require("../model/alarmModel");
const alarmRoutes = require("../routes/alarmRoutes");
const axios = require("axios");

exports.createAlarm = async (req, res) => {
  

  try {
    const { serial, type, checked, deviceType, createdAt, device } = req.body;
    const alarm = await Alarm.create({
      serial,
      type,
      checked,
      deviceType,
      createdAt,
      device,
    });

    setInterval(() => {
      const data = {
        serial: "123456789",
        type: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        checked: false,
        deviceType: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      };

      console.log("SendData", data);

      axios
        .post("http://localhost:8082/alarm", data)
        .then((res) => {
          console.log(`statusCode: ${res.status}`);
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 5000);

    res.status(201).json({ msg: "Alarme criado com sucesso" });
  } catch (error) {
    console.log("erro", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAlarms = async (req, res) => {
  console.log("chegou do get All", req.body);
  try {
    const alarm = await Alarm.find();
    res.status(200).json(alarm);
  } catch (error) {
    console.log("erro", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getOneAlarm = async (req, res) => {
  const { id } = req.params;
  console.log("chegou do get id", req.body);
  try {
    const alarm = await Alarm.findById(id);
    if (!alarm) {
      res.status(404).json({ msg: "Alarme não encontrado" });
      return;
    }
    res.status(200).json(alarm);
  } catch (error) {
    console.log("erro", error);
    res.status(500).json({ error: error.message });
  }
};

exports.updateOneAlarm = async (req, res) => {
  const { id } = req.params;
  const { serial, type, checked, deviceType, createdAt, device } = req.body;

  try {
    const alarm = await Alarm.findByIdAndUpdate(
      id,
      { serial, type, checked, deviceType, createdAt, device },
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
