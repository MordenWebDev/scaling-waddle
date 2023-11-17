const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample data (dummy database)
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Middleware to parse JSON
app.use(bodyParser.json());

// Endpoint to get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});
app.get('/', (req, res) => {
    res.send("hello from backend");
  });

// Endpoint to add a new item
app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
  };

  items.push(newItem);

  res.status(201).json(newItem);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
