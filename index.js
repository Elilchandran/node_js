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
});
