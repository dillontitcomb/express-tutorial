// example router module

const express = require('express');
const router = express.Router();

// Home page route
router.get('/sup', function(req, res) {
  res.send('Wassup homey');
});
router.get('/yo', function(req, res) {
  res.send('Yo dawg');
});
router.get('/hello', function(req, res) {
  res.send('Hello person');
});

module.exports = router;
