import { selectInput, setInput } from '@/shared/store/slices/filterInput'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const CustomizedInputBase: React.FC = () => {
	const dispatch = useDispatch()
	const [search1, setSearch1] = useState<string>('') // поиск
	const selectInput1 = useSelector(selectInput)

	// Поиск по сайту
	const onChangeSearch = (search: any) => {
		dispatch(setInput(search))
		setSearch1(search)
	}

	useEffect(() => {
		setSearch1(selectInput1)
	}, [selectInput1])

	return (
		<Paper
			className='shadow-none border -mr-6 border-solid border-[#666666]'
			component='form'
			sx={{ display: 'flex', alignItems: 'center', width: 270 }}>
			<InputBase
				onChange={(e: any) => onChangeSearch(e.target.value)}
				value={search1}
				className='border-red'
				sx={{ ml: 1, flex: 1 }}
				placeholder='Поиск'
				inputProps={{ 'aria-label': 'search google maps' }}
			/>
			<IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
				<SearchIcon />
			</IconButton>
		</Paper>
	)
}
