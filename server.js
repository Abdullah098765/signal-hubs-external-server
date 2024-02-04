const { default: axios } = require('axios');
const http = require('http');
const cron = require('node-cron');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
});

// Schedule a task using cron syntax (every minute in this example)
cron.schedule('*/10 * * * * *', () => {
      console.log('Task scheduled to run every minute');

      axios.post('https://signal-hub.vercel.app/api/finding-expired-Signals')
            .then(response => {
                  console.log("There is a Response");
            })
            .catch(error => {
                  console.error('Error making the request:');
            });
});
