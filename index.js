const http = require('http');

const notes = [
  { id: '1', title: 'hello', body: 'world', important: true },
  { id: '2', title: 'hello', body: 'world', important: true },
  { id: '3', title: 'hello', body: 'world', important: false },
  { id: '4', title: 'hello', body: 'world', important: true },
  { id: '5', title: 'hello', body: 'world', important: true },
  { id: '6', title: 'hello', body: 'world', important: true },
  { id: '7', title: 'backend using node.js', body: 'Important note about backend', important: false }
];

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(notes));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`Listening on port ${PORT}`);
