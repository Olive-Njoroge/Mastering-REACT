const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true}
});

module.exports = mongoose.model("People", peopleSchema);