const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Player } = require('./models');
const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/players', async (req, res) => {
  const players = await Player.findAll();
  res.json(players);
});

app.post('/players', async (req, res) => {
  const player = await Player.create(req.body);
  res.json(player);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
