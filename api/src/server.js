const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const http = require("http");

const alarmRoutes = require("./routes/alarmRoutes");
const base = require("./mongodb/mongo");
const app = express();
const httpServer = http.createServer(app);

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.text({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());


app.use("/alarms", alarmRoutes);

httpServer.listen(8082, () => {
  console.log("Server Running on port 8082");
});
