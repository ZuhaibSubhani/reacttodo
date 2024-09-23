/* eslint-disable react/prop-types */
import { useState } from "react"
import { axiosInstance } from "../lib/axiosInstance"


export function CreateTodo({fetchTodos}){

    const [todo,setTodo] = useState({
        title:"",
        description:"",
        completed:false
    })
    async function createTodo(){
        const res = await axiosInstance.post('/todo',todo)
        console.log(res.data)
        fetchTodos()
    }
    
    return(
        <div>
            <input 
                type="text" 
                placeholder="title" 
                value={todo.title}
                onChange={(e)=>setTodo({
                    ...todo,
                    title:e.target.value
                })}
            /> <br />

            <input 
                type="text" 
                placeholder="description"
                value={todo.description}
                onChange={(e)=>setTodo({
                    ...todo,
                    description:e.target.value
                })}
            /><br />

            <button onClick={createTodo}>+</button>
        </div>
    )
}   