// 1) Create a "hello world" server using the http module that starts a server and returns plain text.

const http = require(`http`);

const hostname = `127.0.0.1`; // aka localhost
const port = 3000;

// We are setting up a server
const server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader(`Content-Type`, `text/plain`);
    response.end(`Hello World`)
});

server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}`);
});