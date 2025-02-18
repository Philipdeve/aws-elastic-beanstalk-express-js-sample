const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Final Pipeline Test'));
app.get('/login', (req, res) => res.send('Provide username and password'));
app.get('/signup', (req, res) => res.send('Provide username and password'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
