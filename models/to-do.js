const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ToDoSchema = new Schema({
    text: {type: String},
    completed: {type: Boolean},
    details: {type: String}
});

module.exports = mongoose.model('ToDo', ToDoSchema);