//import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { text: 'Aprender react native', completed: false },
  { text: 'Aprender ingés', completed: false },
  { text: 'Comprar ropa invierno', completed: false },
  { text: 'Comprar regalo Kate', completed: true }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      
       <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}  
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
