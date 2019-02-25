const fs = require('fs');

module.exports = function(body){

    fs.appendFile("./src/logs/call.log", 'fire new call', function(err) {
        if(err) {
            return console.log(err);
        }
    });

    // logging of file
    fs.appendFile("./src/logs/call.log", JSON.stringify(body), function(err) {
        if(err) {
            return console.log(err);
        }
    });
};
