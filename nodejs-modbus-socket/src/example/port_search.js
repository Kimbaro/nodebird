require('dotenv').config();

function search_port(){
    const serialPort = require('serialport');

    serialPort.list().then(function (ports) {
        ports.forEach(function (port) {
            console.log("Port: ", port);
        });
    });
}
search_port();