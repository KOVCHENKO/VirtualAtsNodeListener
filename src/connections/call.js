
const newCallEvent = (req) =>  {

    switch(req.body.type) {
        case 'INCOMING':
            req.app.io.emit('incoming_call', {
                call: req.body
            });
            break;
        case 'CANCELLED':
            req.app.io.emit('cancelled_call', {
                data: req.body
            });
            break;
        case 'ACCEPTED':
            req.app.io.emit('accepted_call', {
                data: req.body
            });
            break;
    }

};

const listenToAcceptedCall = (socket, io) => {
    socket.on('accept_call', (data) => {
        // TODO: Записать информацию для логирования из data в файл /src/logs/accepted_calls
        // { user_id: '', user_email: '', created_at: '', phone: '' }

        io.emit('accepted_call', { call: data });
    });
};

const events = {
    newCallEvent, listenToAcceptedCall,
};

module.exports = events;
