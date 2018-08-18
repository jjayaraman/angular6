//import express from 'express';
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('api route working..');
})

router.get('/employees', (req, res) => {
    res.send('hello..');
})

module.exports = router;