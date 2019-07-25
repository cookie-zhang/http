const http = require('http')
const fs = require('fs')
http.createServer(function(req, res){
    console.log('request come ',req.url)

    const html = fs.readFileSync('test.html','utf8')
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'text/html'
    })
    res.writeHead(200,{
        '':'*'
    })
    res.end(html)
}).listen(8887)
console.log('http lisent 8887')