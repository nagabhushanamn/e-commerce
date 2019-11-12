var express = require('express');
var router = express.Router();


//----------------------------------------------------------
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'eat_it_db';

// Create a new MongoClient
const client = new MongoClient(url);

//----------------------------------------------------------
// API - endpoint

router.get('/', function (req, res, next) {
    client.connect(function (err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        // Get the collection
        const col = db.collection('items');
        col.find({}).toArray((err, result) => {
            if (err) throw err;
            res.json(result)
        })
    });
});

module.exports = router;
