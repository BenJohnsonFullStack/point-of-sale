const express = require("express");

const appetizerRouter = require("./menu/appetizers/appetizers-router");

const server = express();

server.use(express.json());

server.use('/api/appetizers', appetizerRouter);

// server.use('*', (req, res, next) => {
//     try{
//         res.json('hello from POS')
//     }
//     catch(err){
//         next(err)
//     }
// })

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({message:'Something went wrong...'});
})

module.exports = server;
