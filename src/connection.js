const callEvents = require("../src/connections/call");

module.exports = function(io){

    io.on('connection', function(socket) {

        // TODO: Прописать использование сокетов с использованием токенов
        // var connectionName = socket.handshake.query['x-clientid'];

        // Emitters and ons related to claims
        require("../src/connections/claim")(socket, io);

        // Emitters and ons related to calls
        callEvents.listenToAcceptedCall(socket, io);

    });

};
