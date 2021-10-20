const http = require('http');
const {addUser, getUsers} = require('./repository');

const hostname = '127.0.0.1';
const port = 7000;

const cors = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return true;
  }
  return false;
}

const server = http.createServer((req, res) => {

  if (cors(req, res)) return;

  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/users':
      if (req.method === 'POST') {
        addUser('Jenya');
        res.write(JSON.stringify({success: true}));
      } else {
        res.write(JSON.stringify(getUsers()));
      }
      break;
    case '/lessons':
      res.write('Tasks');
      break;
    default:
      res.write('Page not found');
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
