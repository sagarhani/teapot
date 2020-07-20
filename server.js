const http = require("http");
const PORT = process.env.PORT || 5000;

http
  .createServer(function(req, res) {
    // send 418 as status code - https://tools.ietf.org/html/rfc2324
    res.writeHead(418);
    res.write("curl -i https://make-coffee.herokuapp.com");
    res.end();
  })
  .listen(PORT);
