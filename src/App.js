

import React,{ useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'; 

const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))  
  if(storedTodos)  setTodos(storedTodos)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }


   function handleAddTodo (e){
    const name = todoNameRef.current.value 
    if (name === '') return
    setTodos(prevTodos => {
      return[...prevTodos, { id: 1, name: name, complete: false}]
    }
      )
    todoNameRef.current.value = null
    
  }


  return (
    <>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input ref={todoNameRef}type="Text" />
    <button onClick={handleAddTodo}>Add to do</button>
    <button>Clear complete</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      </>
      )
}

export default App;
