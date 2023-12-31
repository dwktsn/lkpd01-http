const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'Node.js');

    res.writeHead(404, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js',
    });

    let body = [];

    req
        .on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(body);
        });

    const data = JSON.stringify({
        success: true,
        error: 'Not Found',
        data: null,
    });

    res.end(data);
});

const PORT = 5001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
