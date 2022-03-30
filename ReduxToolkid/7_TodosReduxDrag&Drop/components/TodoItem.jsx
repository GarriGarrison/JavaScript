import { useDispatch } from 'react-redux'
import { deleteTodo, toogleStatus } from '../store/todoSlice'
import { Reorder } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
    height: 0
  },
  animate: {
    opacity: 1,
    height: 'auto'
  },
  exit: {
    opacity: 0,
    height: 0
  }
}

// const TodoItem = ({ id, title, completed }) => {
const TodoItem = ({ todo }) => {
    const dispatch = useDispatch()
    return (
      // <li key={id}>
      <Reorder.Item
        value={todo}
        whileDrag={{
          scale: 1.5,
          boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
        }}
        {...variants}
      >
        <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toogleStatus(todo.id))} />
        <span>{todo.title}</span>
        <span className="delete" onClick={() => dispatch(deleteTodo(todo.id))}>
          &times;
        </span>
        {/* </li> */}
      </Reorder.Item>
    )
  }

export default TodoItem
