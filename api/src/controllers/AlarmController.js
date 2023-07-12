const Alarms = require("../model/alarmModel");
const alarmRoutes = require("../routes/alarmRoutes");
const axios = require("axios");

exports.createAlarm = async (req, res) => {

  const {serial, type, checked, deviceType, device} = req.body;

  try{

    const alarm = await Alarm.create({ serial, type, checked, deviceType, device });
    res.status(201).json({msg: "Alarm criado"})
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
  }
  catch(error){
    console.log('erro:', error)
  }
};

exports.getAllAlarms = () => {};

exports.getOneAlarm = async (req, res) => {};

exports.updateOneAlarm = async (req, res) => {};

exports.deleteOneAlarm = async (req, res) => {};
