import { useState, useEffect } from "react";
import axios from "axios";
import './AlarmList.module.css';


const AlarmList = () => {
  const [alarms, setAlarms] = useState([]);

 
  useEffect(() => {
    fetchAlarms();
    const intervalId = setInterval(fetchAlarms, 5000)
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const fetchAlarms = () => {
    axios
      .get("http://localhost:8082/alarm")
      .then((response) => {
        setAlarms(response.data);
      })
      .catch((error) => {
        console.log("Ocorreu um erro ao receber os alarmes", error);
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center m-5">Lista de alarmes</h1>
    
      <div className="container-fluid row">
        {alarms.map((alarm) => (
          <div className="col-lg-2 mb-3" key={alarm._id}>
            <div className="card custom-card border-success">
              <div className="card-body">
                <h5 className="card-title text-center m-2">Alarme emitido</h5>
                <p className="card-text">Serial: {alarm.serial}</p>
                <p className="card-text">Type: {alarm.type}</p>
                <p className="card-text">Checked: {alarm.checked}</p>
                <p className="card-text">Device: {alarm.deviceType}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlarmList;
