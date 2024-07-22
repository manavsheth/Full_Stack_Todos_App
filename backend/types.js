const zod = require('zod');
/* format of input to expect from users for the three endpoints 
1. for post {
    title:String,
    description:String
    }

2. for get, not required

3. for put {
    id:String // id of the todo that user want to mark has completed
}
*/

const createTodo = zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateTodo = zod.object({
    id:zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}