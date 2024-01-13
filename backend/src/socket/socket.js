var socket = require('socket.io')
var chatService = require('../../components/chat/service/chat.service');
module.exports = (app) => {
    const io = socket.listen(app);

    /* 'connection' is a socket.io event that is triggered when a new connection is 
       made. Once a connection is made, callback is called. */
    io.sockets.on('connection', (socket) => { /* socket object allows us to join specific clients 
                                                    to chat rooms and also to catch
                                                    and emit the events.*/

        // 'join event'
        socket.on('join', (data) => {
            socket.join(data.room);
        });
        // catching the message event
        socket.on('message', (data) => {
            chatService.UpdateLastMessage(data.message.name, data.room).then(res=>{
            });
            io.in(data.room).emit('new message', { data: data.message});
        });

        socket.on('disconnecting', (data) => {
            socket.leave(data);
        });

    });
    return io;
}