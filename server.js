const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname)); 

io.on('connection', (socket) => {
    console.log('Una clienta se conectó a Kancan');

    socket.on('mensaje-chat', (data) => {
        
        io.emit('mensaje-chat', data);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Chat de Kancan corriendo en puerto ${PORT}`);
});

