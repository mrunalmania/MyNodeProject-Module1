const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  const { firstName, middleName, lastName, address, phone, email, description } = req.body;
  // Process the form data as needed (e.g., save to a database)
  // For now, just printing the data to the console
  console.log('Form Data:', req.body);
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
