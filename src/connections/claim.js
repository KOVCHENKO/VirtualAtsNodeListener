module.exports = function(socket, io){

    socket.emit('news', { hello: 'world' });

    socket.on('claim_has_been_created', function (data) {
        console.log('new claim in data');
        io.emit('new_claim', { claim: 'data' });
    });

    socket.on('disconnect', function (data) {
        console.log('client has been disconnected');
    });

};
