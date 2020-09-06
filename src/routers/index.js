// User
// var userRouter = require('./userRouter.js')
// Customer
var customerRouter = require('./customerRouter.js')

var routes = function (app) {
    app.use(customerRouter)
    // app.use(userRouter)
}

module.exports = routes
