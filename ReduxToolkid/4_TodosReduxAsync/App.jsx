import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import TodoList from './components/TodoList'
import InputField from './components/InputField'
import { addNewTodo, fetchTodos } from './store/todoSlice'

function App() {
  const dispatch = useDispatch()

  const [text, setText] = useState('')

  const { status, error } = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const addTask = () => {
    dispatch(addNewTodo(text))
    setText('')
  }

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text))
      setText('')
    }
  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      {/* <NewTodoForm value={text} updateText={setText} handleAction={handleAction} /> */}

      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  )
}

export default App
