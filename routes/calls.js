var express = require('express');
var router = express.Router();

/* GET incoming call. */
router.post('/receive', function(req, res, next) {

    require("../src/util/logger")(req.body);

    req.app.io.emit('new_call', {key:"value"});

    res.send('new call emitter has been send');


});

module.exports = router;
