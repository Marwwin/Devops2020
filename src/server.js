const http = require('http');
const app = require('./app');
const cors = require('cors');
app.use(cors);
const port = process.env.port || 8080;

const server = http.createServer(app)

server.listen(port);