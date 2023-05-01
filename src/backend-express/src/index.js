const { MongoClient } = require('mongodb');
const express = require('express');

// npm install express mongodb

// Setup App
const app = express();
app.use(express.json());

// Build an endpoint
app.get('/', (req, res) => {
    res.send(
        [
            {title: 'API Output'}
        ]
    );
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});

//console.log("fun")