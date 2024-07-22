/* schema 
Todo{
    title:string,
    description:string,
    completed: boolean
}
*/
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://manav:Sakshikothadiya%4063@cluster0.2ix4omb.mongodb.net/todos');
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo = mongoose.model('todos', todoSchema); //todos collection should follow todoSchema
module.exports = {
    todo:todo //you can write only todo if the key and value both are same
}