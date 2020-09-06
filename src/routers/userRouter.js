// import express from 'express'
// import {
//     login,
//     register,
//     getMydata
// } from 'controller/usersController'
// import jwt from 'jsonwebtoken'
// import cors from 'cors'
// import bcrypt from 'bcrypt'
// import User from '../models/User'
var express = require('express')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
var usersController = require('../controller/usersController')
var User = require('../model/tbl_user')

// var router = express.Router()
// router.use(cors())

// process.env.SECRET_KEY = 'secret'

// router.post('/api/register', usersController.register)

// router.post('/api/login', usersController.login)

// router.get('/api/profile', usersController.getMyData)

// module.exports = router
module.exports = (app) => {
    var usersController = require('../controller/usersController')

    app.post('/api/register', usersController.register)

    app.post('/api/login', usersController.login)

    app.get('/api/profile', usersController.getMyData)

}