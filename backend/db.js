/* schema 
Todo{
    title:string,
    description:string,
    completed: boolean
}
*/
const mongoose = require('mongoose');
mongoose.connect(process.env.URL).then(()=>{
    console.log("Connected to MongoDB")
}).catch((error)=>{
    console.log("Error connecting to MongoDB")
    console.log(error)
});
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo = mongoose.model('todos', todoSchema); //todos collection should follow todoSchema
module.exports = {
    todo:todo //you can write only todo if the key and value both are same
}