// create an empty modbus client
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();

// open connection to a serial portsudo chmod -R 777 /dev/ttyUSB0
client.connectRTUBuffered("/dev/ttymxc2", {baudrate: 9600, parity: 'even'});
client.setID(1);

// read the values of 10 registers starting at address 0
// on device number 1. and log the values to the console.
setInterval(function () {
    client.readHoldingRegisters(136, 6, function (err, data) {
        console.log(data.data);
    });
}, 1000);