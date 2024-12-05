const http = require('http');

const server = http.createServer((req,res) => {
    setTimeout(()=> {
        res.writeHead(200, {'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    }, 1000);
});


server.listen(3000, () => {
    console.log(`server running on port 3000...`)
})