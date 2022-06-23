'use strict ';
const server = require('./src/server');
const sequelize = require('./src/db');
require('dotenv').config();


sequelize
.sync()
.then(()=> console.log('connection has been successfully'))
.then(()=> server.start(process.env.PORT))
.catch(err => {
    console.log(err.message);
})