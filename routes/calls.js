var express = require('express');
var router = express.Router();

/* GET incoming call. */
router.post('/receive', function(req, res, next) {

    console.log(req.body.surname);
    const fs = require('fs');

    // check if it works
    fs.appendFile("./src/logs/call.log", 'fire new call', function(err) {
        if(err) {
            return console.log(err);
        }
    });

    // logging of file
    fs.appendFile("./src/logs/call.log", JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }
    });

    req.app.io.emit('new_call', {key:"value"});

    res.send('new call emitter has been send');


});

module.exports = router;
