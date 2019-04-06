const express = require("express");
const axios = require("axios");

const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

var SerialPort = require('serialport');
var Readline = require('@serialport/parser-readline'),
  sp = new SerialPort('COM3', {
    baudRate: 115200
  }),

  parser = sp.pipe(new Readline({ delimiter: '\n' }));

sp.on("open", () => {
  console.log('serial port open');
});

arduinoMessage = '',


parser.on('data', data => {
  console.log('got word from arduino:', data);
 arduinoMessage = data;

});

io.on("connection", socket => {
  console.log("New client connected"), setInterval(
    () => getApiAndEmit(socket),
    500
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});

const getApiAndEmit = async socket => {
  
    socket.emit("FromAPI", arduinoMessage);
  
};
server.listen(port, () => console.log(`Listening on port ${port}`));






