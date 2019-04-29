const mongoose = require('mongoose');
require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })

const dbUrl = `mongodb+srv://hamza:123hamza123@cluster0-hkzvq.mongodb.net/test?retryWrites=true`
mongoose.Promise = global.Promise;

mongoose.set("useCreateIndex", true);

// Connecting to the database
mongoose
    .connect(
        dbUrl,
        {
            useNewUrlParser: true
        }
    )
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch(err => {
        console.log("Could not connect to the database. Exiting now...", err);
        process.exit();
    });

