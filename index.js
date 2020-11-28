const http = require('http');

const {requestListener} = require('./requestListener');

const PORT = 3000;

const server = http.createServer(requestListener);

server.listen(PORT, () => { console.log('Server is running!!!'); });