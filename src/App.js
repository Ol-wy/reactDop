import { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  return (
    <div className="App">
      <header>
        <h1>Список фильмов и сериалов</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            />
        )
      })}
    </div>
  );
}

export default App;