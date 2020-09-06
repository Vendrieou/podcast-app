var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
var cors = require('cors')
// const routes = require('./routers')
const db = require('./config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync with { force: true }');
});

// Enable All CORS Requests
app.use(cors())

require('./routers/customerRouter.js')(app);
require('./routers/userRouter.js')(app);
// routes(app);

// Create a Server
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})