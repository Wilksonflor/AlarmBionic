import { useEffect } from 'react';
import axios from 'axios';

const InserirAlarm = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const data = {
        serial: '123456789',
        type: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        checked: false,
        deviceType: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      };

      console.log("SendData", data);

      axios.post('http://localhost:8082/alarm', data)
        .then(response => {
          console.log(`statusCode: ${response.status}`);
          console.log(response);
        })
        .catch(error => {
          console.error("deu esse erro", error);
        });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  
};

export default InserirAlarm;
