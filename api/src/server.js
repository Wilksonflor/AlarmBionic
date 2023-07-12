const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const alarmController = require('./controllers/AlarmController')
const app = express();


const alarmGenerator = require('./alarmGenerator')
const alarmRoutes = require('./routes/alarmRoutes');
const Alarm = require('./model/alarmModel')
const base = require('./mongodb/mongo')


app.use(cors());
app.use(cookieParser());
app.use(express.json());


// Roteamento
app.use('/alarms', alarmRoutes);

app.listen(5000, () => console.log(`Server is running on port 5000`));
