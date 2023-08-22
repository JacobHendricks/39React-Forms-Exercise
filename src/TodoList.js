import React, { useState } from "react";
// import { v4 as uuid } from 'uuid';
import Todo from "./Todo";  
import NewTodoForm from "./NewTodoForm";


const TodoList = () => {
  const INITIAL_STATE = [
    // { id: uuid(), color: "blue", height: "200", width: "200" }
  ]

  const [todos, setTodos] = useState(INITIAL_STATE);

  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, newTodo])
  }

  // update a todo with updatedTask
  const update = (id, updatedTask) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };

  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  return (
    <div>
      <h1>Todos!!!!</h1>
      <NewTodoForm addTodo={addTodo}/>
      <ul>
        {todos.map(({ key, id, task}) => <Todo key={id} id={id} task={task} remove={remove} update={update} />)}
      </ul>
    </div>
  )
}

export default TodoList;