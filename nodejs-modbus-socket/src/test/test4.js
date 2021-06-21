var SerialPort = require("serialport");
var serialPort = new SerialPort("/dev/ttyUSB0", {baudrate: 9600, autoOpen: false});

// create a modbus client using the serial port
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU(serialPort);

// client.connectRTU("/dev/ttyUSB0", { baudrate: 9600, autoOpen: false })
//     .then(function() {
//         console.log("Connected"); })
//     .catch(function(e) {
//         console.log(e.message); });

// open connection to a serial port
client.open();

var x = setInterval(function () {
    if (client.isOpen()) {
        client.setID(1);
        client.writeFC3(1, 10, 8, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        })
    }
}, 1000);