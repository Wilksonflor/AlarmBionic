import { useState, useEffect } from "react";
import axios from "axios";
import "./AlarmList.module.css";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const AlarmList = () => {
  const [alarms, setAlarms] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    fetchAlarms();
    const intervalId = setInterval(fetchAlarms, 5000);
    return () => {
      clearInterval(intervalId);
    };
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

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const filteredAlarms = filtro
    ? alarms.filter((alarm) => alarm.deviceType === parseInt(filtro))
    : alarms;

  // Colocar a data de criação dos alarmes
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Intl.DateTimeFormat("pt-BR", options).format(date);
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center m-5">Lista de alarmes</h1>

      <div className="container mb-5">
        <h4>Filtro para os dispositivos</h4>

        <select
          className="form-select"
          value={filtro}
          onChange={handleFiltroChange}
        >
          <option value="">Todos os dispositivos</option>
          <option value="1">Device 1</option>
          <option value="2">Device 2</option>
          <option value="3">Device 3</option>
          <option value="4">Device 4</option>
          <option value="5">Device 5</option>
        </select>
        <button className="btnPdf">
          Download PDF
          <PictureAsPdfIcon />
        </button>
        
      </div>

      <div className="row">
        {filteredAlarms.map((alarm) => (
          <div className="col-lg-2 mb-3" key={alarm._id}>
            <div
              className={`card custom-card ${
                alarm.deviceType === 1
                  ? "border-success"
                  : alarm.deviceType === 2
                  ? "border-info"
                  : alarm.deviceType === 3
                  ? "border-warning"
                  : alarm.deviceType === 4
                  ? "border-light"
                  : alarm.deviceType === 5
                  ? "border-danger"
                  : ""
              }`}
            >
              <div className="card-body">
                <p className="card-text">
                  Criado em : {formatDate(alarm.createdAt)}
                </p>
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
