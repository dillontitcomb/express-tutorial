const express = require('express');
const helloRouter = require('./hello');
const morgan = require('morgan');
const app = express();

// navigate to localhost:3000/greetings/...
app.use('/greetings', helloRouter);
app.use(morgan('combined'));

app.listen(3000, function() {
  console.log('This is an example app listening on port 3000!!!');
});
