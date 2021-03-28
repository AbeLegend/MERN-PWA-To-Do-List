import express from 'express';

const router = express.Router();


router.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from('<h1>Welcome to MERN-PWA-To-Do-List API</h1>'));
});


module.exports = router;