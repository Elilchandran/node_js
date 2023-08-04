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
});
