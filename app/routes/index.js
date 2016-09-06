var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send(`
      <h1>Welcome</h1>
      <link rel="stylesheet" type="text/css" href="css/style.css">
      <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
      <p>Roux Academy Meetups put together artists from all walks of life</p>
      <script src="/reload/reload.js"></script>
  `);
});

module.exports = router;