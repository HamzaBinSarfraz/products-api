'use strict'
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('./logger.config');
require('./db.config');
const app = express();
const port = process.env.PORT || 9000;

// require('../src/route/product.route');
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// using default helmet, for more detail follow: https://helmetjs.github.io/
app.use(helmet());

// setup the winston stream for prod...
// app.use(morgan("combined", {
//     stream: winston.stream
// }));


// for dev
app.use(morgan("combined"));

// import all routes at once
require('./routes.config')(app);

// default route
app.get("/", (req, res) => {
    res.status(200).send({
        message: 'YO! Hello Heroku ...'
    })
});

const publicDir = require('path').join(__dirname,'../public');
console.log(publicDir);
app.use(express.static(publicDir));

app.listen(port, () => {
    console.log('server is live on port ' + port);
})
