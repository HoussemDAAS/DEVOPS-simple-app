// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.get('/api/greet', (req, res) => {
  const { firstName, lastName } = req.query;
  const greeting = `Hello, ${firstName} ${lastName}!`;
  res.json({ greeting });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
