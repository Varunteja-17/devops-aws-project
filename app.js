const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Updated DevOps Pipeline");
    res.end();
});

server.listen(8080);
