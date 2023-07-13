import { useState, useEffect } from 'react';
import axios from 'axios';

const InserirAlarm = () => {
  const [intervalId, setIntervalId] = useState([]);

  const handleClick = () => {

    
      const alarm = setInterval(() => {
        const data = {
          serial: '123456789',
          type: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
          checked: false,
          deviceType: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        };

        console.log("SendData", data);

       const response =  axios.post('http://localhost:8082/alarm', data)
          .then(response => {
            console.log(`statusCode: ${response.status}`);
            console.log(response);
          })
          .catch(error => {
            console.error("deu esse erro", error);
          });
      }, 5000);

      setIntervalId(alarm);
    
  };



  return (
    <div>
      <button onClick={handleClick}>Iniciar</button>
    </div>
  );
};

export default InserirAlarm;
