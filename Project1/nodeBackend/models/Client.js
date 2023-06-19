const mongoose = require('mongoose');

var Client = mongoose.model('Client', {
    name: { type: String },
    bill : {type: Object},
    contact: {type: String},
    billno: {type: String}
   
});

module.exports = { Client };