import {useState} from 'react';
export function CreateTodo(){
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    return <div>
              <input type="text" placeholder="title" style={{padding:10,margin:10}} onChange={(e)=>{
                    setTitle(e.target.value);
              }}></input><br/>
              <input type="text" placeholder="description" style={{padding:10,margin:10}} onChange={(e)=>{
                    setDescription(e.target.value);
              }}></input><br/>
              <button style={{padding:10,margin:10}} onClick={()=>{
                fetch('http://localhost:8080/todo',{
                    method:"POST",
                    headers:{
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify({
                        title:title,
                        description:description
                    })
                }).then(async(res) =>{
                    const json = await res.json();
                    alert(json.msg);
                })
              }}>Add a todo</button>
           </div>
}