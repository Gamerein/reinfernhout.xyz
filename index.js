const express = require('express'),
config = require('./config/config.js'),
path = require('path'),
app = express();


app.use(express.static(path.join(__dirname,'./public')));
app.listen(config.port);
