const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');
const upload = require('./upload.js');
// const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(upload);
// app.use('/upload' ,express.static(path.join(__dirname, 'upload')))

app.use(routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})