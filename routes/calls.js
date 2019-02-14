var express = require('express');
var router = express.Router();

/* GET incoming call. */
router.post('/', function(req, res, next) {

    console.log(req.body);

    req.app.io.emit('new_claim', {key:"value"});

    res.send('new call emitter has been send');


});

module.exports = router;
