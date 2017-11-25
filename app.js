var express = require('express');
var app = express();

/* ==========================================================
serve the static index.html from the public folder
============================================================ */
app.use('/scripts', express.static(__dirname + '/node_modules/'));
// app.use('/static', express.static(__dirname + "/"))
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening on port 3000');
});
