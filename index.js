const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT;
const handleReadfile = (filename, statuscode, req, res) => {
    fs.readFile(filename, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        }
    })
}
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        handleReadfile("index.html", 200, req, res);
    }
    else if (req.url === "/about") {
        handleReadfile("About.html", 200, req, res);
    }
    else if (req.url === "/contact") {
        handleReadfile("Contact.html", 200, req, res);
    }
    else {
        handleReadfile("404.html", 404, req, res);
    }

});


server.listen(PORT, () => {
    console.log(`server is running`);
})