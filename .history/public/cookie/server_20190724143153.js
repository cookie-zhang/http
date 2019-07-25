const http = require('http')
const fs = require('fs')
http.createServer(function(req, res){
    console.log(res)
 
        console.log('进来了')
        const html = fs.readFileSync('test.html','utf8')
        res.writeHead(200,{
            'Content-Type':'text/html'
        })
        res.end(html)
}).listen(8886)
console.log('http lisent 8887')