import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import InputField from './components/InputField'

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
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList todos={todos} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo} />
    </div>
  )
}

export default App
