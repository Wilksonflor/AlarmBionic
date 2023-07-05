const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const mongoose = require('mongoose');

const alarmRoutes = require('./routes/alarmRoutes');

const Alarm = require('./model/alarmModel')
const base = require('./mongodb/mongo')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());


// Roteamento
app.use('/server/alarms', alarmRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
