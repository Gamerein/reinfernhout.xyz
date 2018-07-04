const express = require('express');
const config = require('./config/config.js')
const app = express();

app.use(express.static('./public'));
app.listen(config.port);
