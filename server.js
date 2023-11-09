const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req);
    const { headers, url, method } = req;
    console.log('headers', headers);
    console.log('url', url);
    console.log('method', method);

    res.end('Hallo, Aku Arum');
});

const PORT = 5001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));