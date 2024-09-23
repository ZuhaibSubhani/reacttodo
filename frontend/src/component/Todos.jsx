/* eslint-disable react/prop-types */
import { axiosInstance } from "../lib/axiosInstance"


export function Todos({todos,fetchTodos}){
    console.log("Todo list")
    console.log(todos)

    async function markCompleted(id){
        const res = await axiosInstance.put(`/completed`,{
            id:id
        })
        console.log(res.data)
        fetchTodos()
    }

return (
    <div>
        {
            todos?.map((todo)=>{
                return (
                    <div key={todo._id} style={{display:"flex",columnGap:"10px"}}>
                        <h4>{todo.title}</h4>
                        <p>{todo.description}</p>
                        <p>{todo.completed?"completed":"not completed"}</p>
                        <button onClick={()=>markCompleted(todo._id)}>Mark Completed</button>
                    </div>
                )
            })
        }
    </div>
)
}
