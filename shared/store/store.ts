import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import filterInput from './slices/filterInput'
import { postsReducer } from './slices/posts'

// хранилище
export const store = configureStore({
	reducer: {
		posts: postsReducer,
		input: filterInput,
		// auth: authReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
// типизация useDispatch - 24 урок. 1:05:00
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
