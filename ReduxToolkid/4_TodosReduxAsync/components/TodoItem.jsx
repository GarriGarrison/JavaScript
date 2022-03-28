import { useDispatch } from 'react-redux'
import { deleteTodo, toogleStatus } from '../store/todoSlice'

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()
  return (
    <li key={id}>
      <input type="checkbox" checked={completed} onChange={() => dispatch(toogleStatus(id))} />
      <span>{title}</span>
      <span className="delete" onClick={() => dispatch(deleteTodo(id))}>
        &times;
      </span>
    </li>
  )
}

export default TodoItem
