const http = require('http');
const site = require('./site');


http.createServer(site.handleRequest).listen(3000);


