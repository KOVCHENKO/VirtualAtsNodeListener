var express = require('express');
var router = express.Router();

/* GET incoming call. */
router.post('/receive', function(req, res, next) {

    console.log(req.body.surname);

    // logging of file
    const fs = require('fs');
    fs.writeFile("./src/logs/call.log", JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

    req.app.io.emit('new_call', {key:"value"});

    res.send('new call emitter has been send');


});

module.exports = router;
