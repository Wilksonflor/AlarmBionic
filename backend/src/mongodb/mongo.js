const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Bionic:')
.then(() =>{
    console.log('Connected to MongoDb')
})
.catch((err) =>{
    console.log(err)
})
