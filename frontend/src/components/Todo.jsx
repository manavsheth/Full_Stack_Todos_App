/*
todos = [{
    title: "dddddcdvdfvf",
    description: "dsddffgfg"
}]
*/
export function Todo({todos}){
    return <div>
                {todos.map((todo)=>{
                    return <div>
                             <h1>{todo.title}</h1>
                             <h2>{todo.description}</h2>
                             <button style={{padding:10,margin:10}} onClick={()=>{
                                   fetch('http://localhost:8080/completed',{
                                        method:"PUT",
                                        headers:{
                                            'Content-type':"application/json"
                                        },
                                        body:JSON.stringify({
                                            id:todo._id
                                        })
                                   }).then(async(res)=>{
                                        const json = await res.json();
                                        alert(json.msg);
                                   })
                             }}>{todo.completed == true ? "Completed" : "Mark as complete"}</button>
                           </div>
                })}        
           </div>
}