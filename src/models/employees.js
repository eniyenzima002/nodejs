const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    industry: String
});

module.exports = mongoose.model('Employee', employeeSchema);