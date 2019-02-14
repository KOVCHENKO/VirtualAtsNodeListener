var express = require('express');
var router = express.Router();

var http = require('http');
var app = require('../app');
var server = http.createServer(app);
var io = require('socket.io')(server);

/* GET incoming call. */
router.post('/', function(req, res, next) {

    console.log(req.body);

    req.app.io.emit('new_claim', {key:"value"});

    res.send('new call emitter has been send');


});

module.exports = router;
