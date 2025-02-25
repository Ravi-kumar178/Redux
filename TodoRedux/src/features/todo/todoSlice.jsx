import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: (() => {
        const stored = localStorage.getItem("todos");
        if (stored) {
          const parsed = JSON.parse(stored);
          return Array.isArray(parsed) ? parsed : [parsed];
        }
        return [];
      })()
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id: nanoid(),
                message: action.payload
            }
            state.todos.push(todo);
            localStorage.setItem("todos",JSON.stringify(state.todos));
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload);
            localStorage.setItem("todos",JSON.stringify(state.todos));
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer