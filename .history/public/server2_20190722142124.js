const http = require('http')
http.createServer(function(req, res){
    console.log('req',req.url)
    res.end('1111')
}).listen(8887)
console.log('http lisent 8888')