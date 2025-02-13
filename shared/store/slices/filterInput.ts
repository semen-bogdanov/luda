import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface FilterSliceStateI {
	currentInput: string
	category: string
	tags: string
}

const initialState: FilterSliceStateI = {
	currentInput: '', // поиск по сайту
	category: '', // выбранная категория
	tags: '', // выбранный тег
}

const filterInput = createSlice({
	name: 'input',
	initialState,
	reducers: {
		setInput(state, action: PayloadAction<any>) {
			state.currentInput = action.payload
		},
		setCategory(state, action: PayloadAction<any>) {
			state.category = action.payload
		},
		setTags(state, action: PayloadAction<any>) {
			state.tags = action.payload
		},
	},
})

export const selectTags = (state: RootState) => state.input.tags
export const selectCategory = (state: RootState) => state.input.category
export const selectInput = (state: RootState) => state.input.currentInput
export const { setInput } = filterInput.actions
export const { setCategory } = filterInput.actions
export const { setTags } = filterInput.actions

export default filterInput.reducer
