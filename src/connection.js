module.exports = function(io){

    io.on('connection', function(socket) {

        console.log('new connection has been made');

        var connectionName = socket.handshake.query['x-clientid'];

        // Emitters and ons related to claims
        require("../src/connections/claim")(socket, io);

    });

};
