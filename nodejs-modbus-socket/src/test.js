const ModbusRTU = require("modbus-serial")
const SerialPort = require("serialport");
var async = require("async");

var client = new ModbusRTU();
var timeoutConnectRef = null

function connect(){
    const serialPort = require('serialport');

    serialPort.list().then(function(ports){
      ports.forEach(function(port){
        console.log("Port: ", port);
      })
    });

    // const serialport = SerialPort.SerialPort;
    // console.log("test",serialport);
    // const a = getPortsList();
//     console.log("Connecting..!!");
//     clearTimeout(timeoutConnectRef);

//     if(client.isOpen){
//         console.log('Already connected!!');
//         run();
//     }
// //     client.connectRTUBuffered("/dev/ttyUSB0", {dataBits: 8, stopBits: 1, baudRate: 115200})
// //     .then(setClient)
// //     .then(function() {console.log("Connected");})
//     console.log(client);
}
var getPortsList = async (callback) => {
    const test = await SerialPort.list;
    console.log(test);
    var portsList = [];
    SerialPort.list((err, ports) => {
      ports.forEach((port) => {
        portsList.push(port.comName);
      });

      callback(null, portsList);
    });
  };

function setClient(){
    console.log("Set client ID..!!");
    client.setID(1);
    client.setTimeout(3000);

    run();
}

var task = [
    function(callback) {
        client.readDiscreteInputs(1,4, function(err, res_read){
            console.log("L1: " ,res_read.data[0], res_read.data[1], res_read.data[2], res_read.data[3])
            callback()
        })
    },
    function(callback){
        client.readHoldingRegisters(1,4, function(err, res_read){
            console.log("L1Q: " ,res_read.data[0], res_read.data[1], res_read.data[2], res_read.data[3])
            callback()
        })
    }
]
connect();
// function run(){
//     var setLoop = setInterval(function(){
//         async.series(task, function(err, results){
//             console.log("done")
//         })
//     }, 1000)
// }
// module.exports={
//     async start(){
//         await connect();
//     }
// };