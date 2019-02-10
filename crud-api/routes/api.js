const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const URL = 'mongodb://localhost:27017';
const DATABASE_NAME = 'crud';
var db;

var options = { useNewUrlParser: true };

// DB connect once, and use many times
MongoClient.connect(URL, options, (error, client) => {
    if (error) {
        console.log('DB Connection error: ' + error);
        return;
    }
    //console.log(client);
    db = client.db(DATABASE_NAME);
    console.log('DB connected..');
})



router.get('/', (req, res) => {
    res.send('api route working..');
})

router.get('/employees', (req, res) => {

    const employee = db.collection('employee');
    
    employee.find({}).toArray((error, docs) => {
        if (error) {
            console.log('Error : ' + error);
            res.send(error);
        }
        res.send(docs);
    })
})



module.exports = router;