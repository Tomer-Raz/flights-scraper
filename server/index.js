import express from 'express';
import { exec } from 'child_process';
const app = express();
app.get('/run-script', (req, res) => {
    exec('node scripts.js', (error, stdout, stderr) => {
console.log('started here index!');
      if (error) {
        res.status(500).send(error);
        return;
      }
      if (stderr) {
        res.status(500).send(stderr);
        return;
      }
    });
  });

  app.get("/", (request, response) => {
    response.sendFile('index.html', { root: '.' });});
  
  app.listen(3001, () => {
    console.log('Server running on port 3001');
  });
