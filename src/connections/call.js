
const newCallEvent = (req) =>  {

    req.app.io.emit('new_call', {
        data: req.body
    });

};

var events = {
    newCallEvent: newCallEvent,
};

module.exports = events;
