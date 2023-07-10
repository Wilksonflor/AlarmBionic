const axios = require('axios')

const alarmGenerator = () =>{
    
    setInterval(() => {


        const data =
        {
            serial: '123456789',
            type: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
            checked: false,
            deviceType: Math.floor(Math.random() * (5 - 1 + 1)) + 1
        }
    
        console.log("SendData", data);
    
        axios
            .post('http://localhost:8082/alarm', data)
            .then(res => {
                console.log(`statusCode: ${res.status}`)
                console.log(res)
            })
            .catch(error => {
                console.error(error)
            })
    }, 5000);
    
}
