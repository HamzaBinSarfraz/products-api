'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('server is live on port ' + port);
});

// default route

app.get("**", function (req, res) {
    res.status(200).send({
        message: 'YO! Hello from another side ...'
    });
});