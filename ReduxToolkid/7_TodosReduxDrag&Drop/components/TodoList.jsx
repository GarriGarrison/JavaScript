import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { Reorder, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
// import { fetchTodos } from '../store'



// const TodoList = ({ setTasks, tasks = [] }) => {
const TodoList = () => {
  const dispatch = useDispatch

  const todos = useSelector(state => state.todos.todos)

  const [tt, setTT] = useState(todos)

  console.log('tt', tt)
  useEffect(() => {
    setTT(todos)
    //  console.log(tt)
    //  console.log(todos);
  }, [todos])

  // const dragTodos = () => {
  //   dispatch(fetchTodos())
  // }

  return (
    // <ul>
    <Reorder.Group as="ol" axys="y" values={tt} onReorder={setTT}>
      <AnimatePresence initial={false}>
        {tt.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        {/* </ul> */}
      </AnimatePresence>
    </Reorder.Group>
  )
}

export default TodoList
