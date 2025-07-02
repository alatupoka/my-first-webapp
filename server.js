const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const { text } = req.body;
  const message = { id: Date.now(), text };
  messages.push(message);
  res.status(201).json(message);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));