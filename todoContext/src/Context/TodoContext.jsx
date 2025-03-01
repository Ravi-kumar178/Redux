import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Message 1",
            completed: false
        },
    ],
    addTodo:(todo)=>{},
    updateTodo:(todo,id)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}