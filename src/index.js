const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

require("dotenv").config();

const usersRotes = require('./routes/users');

app.use(bodyParser.json({ extended: false }));

app.use("/users", usersRotes);

app.use("/",(req, res, next) => {
    // eslint-disable-next-line no-console
    console.log("Hi I'm always run!");
    next();
});


app.use("/message",(req, res) => {
    // eslint-disable-next-line no-console
    console.log("Hi message route!");
    res.status(200).send({ 
        message: {
            answer: "Hello motherfucker",
        },
    });
});

app.use("/home",(req, res, next) => {
    // eslint-disable-next-line no-console
    console.log("Hi home route!");
    res.status(200).send({ 
        message: {
            answer: "Hello home",
        },
    });
});

// eslint-disable-next-line no-undef
server.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log("Server was started on " + process.env.PORT)
});