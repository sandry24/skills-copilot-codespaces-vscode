// Create web server 
// Create web server 
var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 8080;

var server = http.createServer(function(req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'public/index.html')
      break
    case '/index.html':
      sendFile(res, 'public/index.html')
      break
    case '/style.css':
      sendFile(res, 'public/style.css', 'text/css')
      break
    case '/app.js':
      sendFile(res, 'public/app.js', 'text/javascript')
      break
    case '/comments.json':
      sendFile(res, 'public/comments.json', 'application/json')
      break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines
// Send a file to the browser
function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html';

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })
}