'use client'
import {
	selectCategory,
	selectInput,
	selectTags,
} from '@/shared/store/slices/filterInput'
import { fetchPosts } from '@/shared/store/slices/posts'
import Grid from '@mui/material/Grid2'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SkeletonCart } from '../SkeletonCart'
import { Cart } from './cart'

export const Blogs = () => {
	const dispatch = useDispatch<any>()
	const { posts } = useSelector((state: any) => state.posts)
	const selectInput1 = useSelector(selectInput) // Поиск
	const selectCategory1 = useSelector(selectCategory) // Выбранная категория
	const selectTags1 = useSelector(selectTags) // Выбранный тег
	// event.preventDefault() // Предотвратить переход на верх
	const [currentPage, setCurrentPage] = useState(1) // текущая страница
	// const [search, setSearch] = useState(false) // при поиске убираеться погинация
	const [postsPerPage] = useState(12) // количество карточек на странице

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	// фильтрация по сайту
	const filteredPosts = useMemo(() => {
		if (!posts.items) return []
		let filtered = [...posts.items] // Копируем массив, чтобы не изменять исходный
		if (selectInput1) {
			filtered = filtered.filter((element: any) => {
				const titleLower = element.title?.toLowerCase() || ''
				const textLower = element.text?.toLowerCase() || ''
				const tagsLower = element.tags?.toLowerCase() || ''
				const searchLower = selectInput1.toLowerCase()
				return (
					titleLower.includes(searchLower) ||
					textLower.includes(searchLower) ||
					tagsLower.includes(searchLower)
				)
			})
		}
		if (selectCategory1) {
			filtered = filtered.filter((element: any) =>
				element.category?.includes(selectCategory1)
			)
		}
		if (selectTags1) {
			filtered = filtered.filter((element: any) =>
				element.tags?.includes(selectTags1)
			)
		}
		return filtered
	}, [selectInput1, selectCategory1, posts.items, selectTags1])

	// let massiv: any
	// filteredPosts.length !== 0 ? (massiv = filteredPosts) : (massiv = posts.items)
	let displayedPosts = filteredPosts

	// Погинация
	// Рассчитайте начальный и конечный индексы для данных текущей страницы.
	const startIndex = (currentPage - 1) * postsPerPage // индекс 0
	const endIndex = startIndex + postsPerPage // индекс 0 + 12
	displayedPosts = displayedPosts.slice(startIndex, endIndex) // массив от 0 до 12

	return (
		<div className='sm:ml-[26px] 2md:ml-[50px]'>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{posts.status !== 'loaded'
					? [...new Array(postsPerPage)].map((_: any, index: number) => (
							<div key={index}>
								<SkeletonCart />
							</div>
					  ))
					: displayedPosts.map((element: any, index: number) => (
							<div key={index}>
								<Cart
									id={element.id}
									imgCart={element.picture}
									text={element.text}
									tags={element.tags}
									textH3={element.title}
								/>
							</div>
					  ))}
			</Grid>
			{/* cn(search ? 'hidden' : 'flex justify-center') */}
			<div className={'flex justify-center'}>
				<Stack spacing={6}>
					<Pagination
						count={Math.ceil(filteredPosts.length / postsPerPage)} // Длина массива делится на кол-во карточек на странице (т.е. на 12), далее метод Math.ceil()  округлет число в большую сторону
						page={currentPage}
						onChange={(event: any, page: any) => setCurrentPage(page)}
						shape='rounded'
						variant='outlined'
						sx={{
							'& .MuiPaginationItem-root.Mui-selected': {
								backgroundColor: '#ef671d',
								color: '#ffffff',
								width: '40px',
								height: '40px',
							},

							'& .MuiPaginationItem-root': {
								color: 'black',
								borderColor: 'var(--border)',
								width: '40px',
								height: '40px',
								fontWeight: 600,
							},
						}}
					/>
				</Stack>
			</div>
		</div>
	)
}
