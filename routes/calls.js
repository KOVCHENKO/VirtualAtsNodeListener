var express = require('express');
var router = express.Router();

var logger = require("../src/util/logger");
var callEvents = require("../src/connections/call");

/* GET incoming call. */
router.post('/receive', function(req, res) {

    logger(req.body);

    callEvents.newCallEvent(req);

    res.send('new call emitter has been send');


});

module.exports = router;
