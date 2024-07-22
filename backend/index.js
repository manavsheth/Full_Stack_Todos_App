const express = require('express');
const app = express();
const {createTodo, updateTodo} = require('./types');
const {todo} = require('./db');
const cors = require('cors')
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin:"http://localhost:5173" //allowing only this frontend to make requests to my server listening on port 8080
})); //Middleware to allow cross origin requests or allowing any frontend to make requests to this server listening on port 8080
app.use(express.json()); //Middleware to parse JSON data coming in body of post request

//format of todo to expect from users
// body{
    //title:String,
    //description: String
// }
app.post('/todo', async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You have not provided the correct input format"
        })
        return;
    }
    //else put it in mongodb
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.status(200).json({
        msg:"Todo created successfully"
    })
})

app.get('/todos', async (req,res)=>{
    //fetch all todos from mongodb
    const todos = await todo.find({});
    res.status(200).json({
        todos
    })
})

app.put('/completed', async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You have not provided the correct input format"
        })
        return;
    }
    // else update the todo in mongodb
    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.status(200).json({
        msg:"Todo marked as completed"
    })
})




app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});