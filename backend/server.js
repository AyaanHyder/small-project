const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  // For now, just echo back the received data
  res.json({ receivedData: { name, email } });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
