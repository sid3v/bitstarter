var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var hello=fs.readFileSync('index.html');
  var passhello=new Buffer(256);
  passhello=buf.toString(hello);
  response.send(passhello);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
