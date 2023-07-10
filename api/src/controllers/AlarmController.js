const express = require('express');
const axios = require('axios')
const router = express.Router();
const Alarm = require('../model/alarmModel');
const alarmGenerator = require('../alarmGenerator')


exports.getAll =(req, res) =>{
    res.status(200).json({
        status: 'sucess', alarmGenerator
    })
}
router.get('/:id', (req, res) => {
  res.send('Hello world');
});


router.post('/alarms', (req, res) => {

  const alarmGenerator = () => {
    setInterval(() => {
      const data = {
        serial: '123456789',
        type: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        checked: false,
        deviceType: Math.floor(Math.random() * (5 - 1 + 1)) + 1
      }

      console.log("SendData", data);

      axios
        .post('http://localhost:8082/alarm', data)
        .then(response => {
          // console.log(`statusCode: ${response.status}`)
          // console.log(response)
        })
        .catch(error => {
          console.error(error)
        });
    }, 5000);
   
  };

});


router.patch('/:id', (req,res) =>{

})

router.delete('/:id', (req,res) =>{

})
module.exports = router;
