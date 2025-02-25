import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './Context'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import TodoForm from './Component/TodoForm';
import TodoItem from './Component/TodoItem';

function App() {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev)=>[...prev,{id:Date.now(),todo:todo,completed:false}]);
  }

  const updateTodo = (id,todo) => {
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id?todo:prevTodo));
  }

  const deleteTodo = (id) => {
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
/*   console.log("todos in App.jsx:", todos); */

  //getting from local storage
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[])

  //setItem
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos]);

  return (
    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm/>
                </div>
                <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {
                    todos.map((todo)=>(
                      <TodoItem key={todo.id} todo={todo}/>
                    ))
                  }
                </div>
            </div>
        </div>
      
    </TodoContextProvider>
  )
}

export default App
