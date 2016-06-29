var express = require('express'),
    app = express();

var router = require('./router');

var static_root = __dirname.replace(/\\tools$/,'') + '/build/';

app.use(express.static(static_root));

app.use('/',router);

app.listen(3000);

