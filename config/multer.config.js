'use strict'
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './images');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }

});
const upload = multer({
    storage: storage
}, {
    limits: 1024 * 1024 * 5
});
const type = upload.single('product_image');

module.exports = type;