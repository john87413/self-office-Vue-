module.exports = app => {
    const express = require('express')
    const router = express.Router()
    
    app.use('/web/api', router)
}