/*
    Template de schema mongoose
*/

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    data: String,
    data2: Number,
    data3: mongoose.Types.ObjectId
});

const Schema = mongoose.model('schema', schema);

module.exports = Schema;