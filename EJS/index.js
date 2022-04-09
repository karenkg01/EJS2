const express = require("express"); //Framework to buildbackend applications with node.
const viewRoutes = require('./routes/viewRoutes')
const apiRoutes = require('./routes/apiRoute')
const app = express(); //this method does the same thing as http.createserver
const PORT = 8080;
const path = require('path')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.set('view engine','ejs');
app.use(express.json());
app.use('/', viewRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));

module.exports = app;
