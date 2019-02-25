const fs = require('fs');

module.exports = function(body){

    // logging of file
    fs.appendFile("./src/logs/call.log", JSON.stringify(body), function(err) {
        if(err) {
            fs.appendFile("./src/logs/errors.log", JSON.stringify(err));
        }
    });
};
