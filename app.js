const http = require("http");

const server = http.createServer((req, res) => {
    console.log("New request received at: " + new Date());

    res.write("Hello DevOps Micro Project");
    res.end();
});

server.listen(8080);
