// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route to handle getting a list of items
app.get('/items', (req, res) => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ];
  res.json(items);
});

// Route to handle creating a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  // In a real application, you would save this to the database
  res.status(201).json(newItem);
});

// Route to handle getting a single item by ID
app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const item = { id, name: `Item ${id}` };
  // In a real application, you would fetch this from the database
  res.json(item);
});

// Route to handle updating an item by ID
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  // In a real application, you would update this in the database
  res.json({ id, ...updatedItem });
});

// Route to handle deleting an item by ID
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  // In a real application, you would delete this from the database
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
