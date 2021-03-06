import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim().length) {
      // убираем лишние пробелы (trim) и проверяем что текс не пустой
      setTodos([
        ...todos, //добовляем (разворачиваем массив спомощью оператора spred) все имеющиеся тудушки
        // добовляем новую тудушку в виде объекта {id, test, status_competed}
        {
          id: new Date().toISOString(),
          text, // сокращённая запись (text: text)
          completed: false
        }
      ])
      setText('')
    }
  }

  const toggleTodoComplete = todoId => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoId) return todo

        // todo.completed = !todo.completed  // так не пишем, т.к. это мутация объекта todo
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    )
  }

  const removeTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
      <label>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </label>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoComplete(todo.id)} />
            <span>{todo.text}</span>
            <span className="delete" onClick={() => removeTodo(todo.id)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
