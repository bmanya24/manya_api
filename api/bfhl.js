const express = require('express');
const app = express();
app.use(express.json());

app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestLowercaseAlphabet = alphabets
    .filter(char => char === char.toLowerCase())
    .sort()
    .pop();

  res.json({
    is_success: true,
    user_id: "manya_bhardwaj_24112002",
    email: "bmanya2411@gmail.com",
    roll_number: "21BCE1293",
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
  });
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

module.exports = app;
