const http = require('http')
const fs = require('fs')
http.createServer(function(req, res){
    console.log('request come ',req.url)
        
    if(res.url === '/'){


    }
    

    res.end(html)
}).listen(8887)
console.log('http lisent 8887')