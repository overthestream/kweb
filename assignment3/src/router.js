const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('index.pug');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`username: ${username}, password: ${password}`);
});

module.exports = router;
