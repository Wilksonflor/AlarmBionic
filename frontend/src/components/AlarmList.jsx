import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./AlarmList.module.css";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import jsPDF from "jspdf";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";




const AlarmList = () => {
  const [alarms, setAlarms] = useState([]);
  const [filtro, setFiltro] = useState("");


  const filteredAlarms = filtro
    ? alarms.filter((alarm) => alarm.deviceType === parseInt(filtro))
    : alarms;
  useEffect(() => {
    fetchAlarms();
    const intervalId = setInterval(fetchAlarms, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // useEffect(() => {
  //   generatePDF();
  // }, [filtro, alarms]);

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

  const generatePDF = () => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // Crie um array de dados a partir dos alarmes filtrados
    const data = filteredAlarms.map((alarm) => {
      return [
        { text: `${formatDate(alarm.createdAt)}`, style: "tableData" },
        { text: ` ${alarm.serial}`, style: "tableData" },
        { text: ` ${alarm.type}`, style: "tableData" },
        { text: ` ${alarm.checked}`, style: "tableData" },
        { text: ` ${alarm.deviceType}`, style: "tableData" },
      ];
    });
  
    // Defina a definição do documento PDF
    const docDefinition = {
      content: [
        { text: "Relatório de Alarmes", style: "header" },
        {
          style: "tableExample",
          alignment: 'center',
          table: {
            headerRows: 1,
            widths: [150, 100, "*", 80, "*"],
            body: [
              [
                { text: "Data e hora do alarme", style: "tableHeader" },
                { text: "Serial", style: "tableHeader" },
                { text: "Type", style: "tableHeader" },
                { text: "Checked", style: "tableHeader" },
                { text: "Device", style: "tableHeader" },
              ],
              ...data,
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: "center",
          margin: [0, 0, 0, 20],
        },
        tableExample: {
          margin: [20, 20, 0, 20],
        },
        tableHeader: {
          alignment: "center",
          bold: true,
          fontSize: 13,
          color: "black",
        },
        tableData: {
          fontSize: 11,
        },
      },
    };
  
    // Crie o PDF
    const pdfDoc = pdfMake.createPdf(docDefinition);
    pdfDoc.open();
  };
  
  

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
      <div className="m-5">
        <button className="btn btn-danger" onClick={generatePDF}>
          Gerar PDF
          <PictureAsPdfIcon />
        </button>
      </div>
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
