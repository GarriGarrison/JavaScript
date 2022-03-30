import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import TodoList from '../TodoList'
import InputField from '../InputField'
import { addNewTodo, fetchTodos } from '../../store/todoSlice'
// import { useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation } from '../../store'

// import { Button } from '../Button'
// import { Input } from '../Input'

// const defaultTodos = [
//   {
//     id: 1,
//     title: 'milk'
//   },
//   {
//     id: 2,
//     title: 'bananas'
//   },
//   {
//     id: 3,
//     title: 'icecream'
//   },
//   {
//     title: 'apple',
//     id: 4
//   },
//   {
//     title: 'orange',
//     id: 5
//   }
// ]

function App() {
  const dispatch = useDispatch()

  // const [count, setCount] = useState('')
  // const [newProduct, setNewProduct] = useState('')

  // const { data = [], isLoading } = useGetGoodsQuery(count)
  // const [addProduct, { isError }] = useAddProductMutation()
  // const [deleteProduct] = useDeleteProductMutation()

  // const handleAddProduct = async () => {
  //   if (newProduct) {
  //     await addProduct({ name: newProduct }).unwrap()
  //     setNewProduct('')
  //   }
  // }

  // const handleDeleteProduct = async id => {
  //   await deleteProduct(id).unwrap()
  // }

  // if (isLoading) return <h1>Loading...</h1>

  const [text, setText] = useState('')
  // const [tasks, setTasks] = useState(defaultTodos)

  // const { status, error } = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const addTask = () => {
    dispatch(addNewTodo(text))
    setText('')
  }

  // const handleAction = () => {
  //   if (text.trim().length) {
  //     dispatch(addNewTodo(text))
  //     setText('')
  //   }
  // }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      {/* <NewTodoForm value={text} updateText={setText} handleAction={handleAction} /> */}
      {/* {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>} */}
      {/* <TodoList setTasks={setTasks} tasks={tasks} /> */}
      <TodoList />
      {/* <div>
        <input type="text" value={newProduct} onChange={event => setNewProduct(event.target.value)} />
        <button onClick={handleAddProduct}>Add product</button>
      </div>
      <div>
        <select value={count} onChange={event => setCount(event.target.value)}>
          <option value="''">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <ul>
        {data.map(item => (
          <li key={item.id} onDoubleClick={() => handleDeleteProduct(item.id)}>
            {item.name}
          </li>
        ))}
      </ul> */}

      {/* <Button text="Click me" />
      <Input /> */}
    </div>
  )
}

export default App
