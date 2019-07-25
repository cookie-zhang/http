const http = require('http')
http.createServer(function(req, res){
    console.log('request come ',req.url)

    const html = fs.readFileSync('')
    res.end('8887')
}).listen(8887)
console.log('http lisent 8887')