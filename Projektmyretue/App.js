var express = require('express');
var reload = require('reload');
var app = express();
var datafileFile = require('C:\Users\sels1\source\repos\expressjs\Projektmyretue\app.js')

app.set('port', process.env.PORT || 300);
app.set('appData', dataFile);

app.use(express.static('app/public'));

var server = app.listen(app.get('port'), function(){
    console.log(' listening on port' + app.get('port'));
});
