const express = require('express');
const usersRoutes = require('./routes');

const app = express();

// Express suports simple HTTP methods, POST, PUT, GET, DELETE
// res.query -> return all params setted on url by GET method
// res.params -> return all params setted on url pattern, eg: users/:id -> req.params.id
// res.body -> return all body setted by POST and PUT request methods

// Set which accept-content on headers
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        msg: 'Hello World!'
    })
});


app.listen('3333');