import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import TodoList from './components/TodoList'
import InputField from './components/InputField'
import { addTodo } from './store/todoSlice'

function App() {
  const dispatch = useDispatch()

  const [text, setText] = useState('')

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('')
  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  )
}

export default App
