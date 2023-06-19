const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Client } = require('../models/Client');

//Get Method To show the data.

router.get('/', (req, res) => {
console.log("Get");
    Client.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('error in retriving Client :' + JSON.stringify(err, undefined, 2)); }

    });

});
// search Data by Id.
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id }');

    Client.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in retriving Client :' + JSON.stringify(err, undefined, 2)); }
    });

});

//set the Data to server

router.post('/', (req, res) => {
    console.log("Post");
    var client = new Client({
        name: req.body.name,
       bill : req.body.bill,
       contact: req.body.contact,
       billno: req.body.billno,
    });
    console.log("Post", client);
    client.save((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('error in Client save :' + JSON.stringify(err, undefined, 2)); }
    });
});

// update method
router.put('/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id }');

    var client = {
        name: req.body.name,
       bill : req.body.bill,
       contact: req.body.contact,
       billno: req.body.billno,
    };

    Client.findByIdAndUpdate(req.params.id, { $set: client }, {new :true}, (err, docs) => {
        if (!err) { res.send(docs); } 
        else { console.log('error in Client save :' + JSON.stringify(err, undefined, 2)); }
    });

});

// Delete Operation of Data.

router.delete('/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id }');

    Client.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) { res.send(docs); } 
        else { console.log('error in Client save :' + JSON.stringify(err, undefined, 2)); }
    });

});

module.exports = router;