import { combineReducers, configureStore } from "@reduxjs/toolkit"
import thunkMiddleware from "redux-thunk"
import { pagesReducer } from "../reducers/pagesReducer"

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

const rootReducer = combineReducers({
  dataPages: pagesReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})
