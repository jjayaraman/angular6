const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const URL = 'mongodb://localhost:27017';
const DATABASE_NAME = 'crud';
var DB;

var options = { useNewUrlParser: true };

MongoClient.connect(URL, options, (error, client) => {
    if (error) {
        console.log('DB Connection error: ' + error);
        return;
    }
    //console.log(client);
    DB = client.db(DATABASE_NAME);
    console.log('DB connected..');
})



router.get('/', (req, res) => {
    res.send('api route working..');
})

router.get('/employees', (req, res) => {

    console.log('DB : ' + DB);
    const employee = DB.collection('employee');
    employee.find({}).toArray((error, docs) => {
        if (error) {
            console.log('Error : ' + error);
        }
        console.log('docs :  ' + JSON.stringify(docs));
        res.send(docs);
    })
})



module.exports = router;