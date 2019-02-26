
const newCallEvent = (req) =>  {

    switch(req.body.type) {
        case 'INCOMING':
            req.app.io.emit('incoming_call', {
                data: req.body
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

var events = {
        newCallEvent: newCallEvent,
};

module.exports = events;
