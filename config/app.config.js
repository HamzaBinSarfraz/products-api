'use strict'
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./logger.config');
require('./db.config');
const app = express();
const port = process.env.PORT || 3000;


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


app.listen(port, () => {
    console.log('server is live on port ' + port);
})

// default route
app.get("/", (req, res) => {
    res.status(200).send({
        message: 'YO! Hello Heroku ...'
    })
})