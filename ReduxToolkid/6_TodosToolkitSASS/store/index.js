import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'
import { goodsApi } from './goodsApi'

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    [goodsApi.reducerPath]: goodsApi.reducer
  },
  middleware: getDefaultMiddlware => getDefaultMiddlware().concat(goodsApi.middleware)
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
