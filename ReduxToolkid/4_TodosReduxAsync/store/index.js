import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'

export default configureStore({
  reducer: {
    todos: todoSlice
  }
})


/**
 * 2-й вариан через combineRedusers
 */
// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import todoSlice from './todoSlice'

// const rootReducer = combineReducers({
//   todos: todoSlice
// })

// export const store = configureStore({
//   reducer: rootReducer
// })

