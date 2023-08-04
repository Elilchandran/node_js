<<<<<<< HEAD
const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3001;

const dateTimeFolderPath = path.join(__dirname, 'DateTime');

// Create 'DateTime' folder if it doesn't exist
if (!fs.existsSync(dateTimeFolderPath)) {
  fs.mkdirSync(dateTimeFolderPath);
}

http.createServer((req, res) => {
  const date = new Date();
  const filePath = path.join(dateTimeFolderPath, `${date.toDateString()}.txt`);

  fs.writeFile(filePath, date.toString(), (err) => {
    if (err) {
      console.error(err);
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { "Content-Type": "text/html" });
        res.write("Error reading file");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(data);
        res.end();
      }
    });
  });
}).listen(PORT, () => {
  console.log('Server is up in', PORT);
=======
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001; // 

// Middleware
app.use(express.json());

// Endpoint to create a text file with the current timestamp
app.get('/api/create-file', (req, res) => {
  const currentTime = new Date().toISOString();
  const fileName = 'date-time.txt';

  fs.writeFile(fileName, currentTime, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).json({ error: 'Failed to create the file' });
    }

    console.log(`File '${fileName}' created successfully with the content:`, currentTime);
    res.status(201).json({ message: 'File created successfully' });
  });
});

// Endpoint to retrieve all text files in the 'files' folder
app.get('/api/get-files', (req, res) => {
  fs.readdir('files', (err, files) => {
    if (err) {
      console.error('Error reading the folder:', err);
      return res.status(500).json({ error: 'Failed to read the folder' });
    }

    res.status(200).json({ files });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
>>>>>>> back_end/task
});
