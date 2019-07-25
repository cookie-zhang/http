const http = require('http')
http.createServer(function(req, res){
    console.log('req',req.url)
    res.end('1111')
}).listen(8888)
console.log('http lisent 8888')

const http = require('http')
const fs = require('fs')
http.createServer(function(req, res){
    console.log('request come ',req.url)

    const html = fs.readFileSync('test.html','utf8')
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    res.end(html)
}).listen(8887)
console.log('http lisent 8887')