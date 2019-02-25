module.exports = function(socket, io){

    socket.on('claim_has_been_created', function (data) {
        io.emit('new_claim', { claim: data });
    });

    socket.on('disconnect', function () {
        // console.log('client has been disconnected');
    });

};
