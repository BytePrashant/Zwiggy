const http = require("http");

const server = http.createServer((req, res) => {
    console.log("new request received");
    res.end("hello from server");
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})