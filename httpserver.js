const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    console.log(req.url)
    res.setHeader('Content-Type','text/html');
    res.end(`<h1>This my 1st NodeJS server</h1><br><hr><p>I hope that I have done it properly`)
})

server.listen(port, ()=>{
    console.log(`The server is running at port no ${port}`)
})

// we can get the url using the req.url