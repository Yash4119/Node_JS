const http = require('http');
const fs = require('fs')

const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    console.log(req.url)
    res.setHeader('Content-Type','text/html');

    if(req.url == '/'){
        
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString())
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end(`<h1>This my About Page</h1><br><hr><p>I hope that I have done it properly`)
    }
    else if(req.url == '/contact'){
        res.statusCode = 200;
        res.end(`<h1>This my 1st NodeJS server</h1><br><hr><p>I hope that I have done it properly`)
    }
    else{
        // res.harry();
        res.statusCode = 404;
        res.end(`<h1>Page Not Found</h1><br><hr>`);
    }
    
})

server.listen(port, ()=>{
    console.log(`The server is running at port no ${port}`)
})

// we can get the url using the req.url