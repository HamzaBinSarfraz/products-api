

// file system
const normalize_path = require('path').join(__dirname, '../src/route');
const path = '../src/route/';

module.exports = (app) => {
    const fs = require('fs').readdirSync(normalize_path).forEach((file) => {
        // uncomment this for testing
        console.log(file," ______________route loaded");
        require(path + file)(app);
    });
}
