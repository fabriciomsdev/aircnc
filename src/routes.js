const express = require('express');

const routes = express.Router();

routes.get('/users', (req, res) => {
    return res.json({
        msg: 'Hello World!'
    })
});

module.exports = routes