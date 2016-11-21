'use strict'
require('dotenv').config({ silent: true });
const bodyParser = require('body-parser');
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const app     = express();

const PORT    = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => { console.log('Ja zees app is listening, just like KGB')});


