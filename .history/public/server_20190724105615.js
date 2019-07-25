const http = require('http')
const fs = require('fs')
http.createServer(function(req, res){
    console.log('request come ',req.url)

    if(res.url === '/'){
        console.log('进来了')
        const html = fs.readFileSync('test.html','utf8')
        res.writeHead(200,{
            'Content-Type':'text/html'
        })
        res.end(html)
    }

    // if(res.url === '/script.js'){
        res.writeHead(200,{
            'Content-Type':'text/javascript'
        })
        res.end('console.log("script loaded")') 
    }
    

}).listen(8887)
console.log('http lisent 8887')