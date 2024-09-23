import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './component/CreateTodo'
import { Todos } from './component/Todos'
import { axiosInstance } from './lib/axiosInstance'

function App() {
  const [todos,setTodos]=useState([])

  async function fetchTodos(){
    console.log("fetching todos")
    const res = await axiosInstance('/todos')
    setTodos(res.data.todos)
  }

  useEffect(()=>{
    console.log("effect runnning")
    fetchTodos()
  },[])

  
  return (
  <div>
    <CreateTodo fetchTodos={fetchTodos}/>
    <Todos fetchTodos={fetchTodos} todos={todos}/>
  </div>
  )
}

export default App
