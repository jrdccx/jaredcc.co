var util = require('util')
  , http = require('http')
  , httpProxy = require('http-proxy');

httpProxy.createServer({
    router: {
        'localhost': 'localhost:8080',
        'www.jaredcc.com': 'localhost:7777'
    }
}).listen(80);

util.puts('http proxy server started on port: 80');