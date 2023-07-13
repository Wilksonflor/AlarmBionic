const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const http = require("http");

const alarmRoutes = require("./routes/alarmRoutes");
const base = require("./mongodb/mongo");

// middleware
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.text({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());

app.use("/alarm", alarmRoutes);

const server = http.createServer(app);

server.listen(8082, () => {
  console.log("Server running on port 8082");
});
