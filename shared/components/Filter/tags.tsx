'use client'

import { setTags } from '@/shared/store/slices/filterInput'
import { Chip } from '@mui/material'
import Stack from '@mui/material/Stack'
import * as React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Props4 } from './categoriesArhives'

export interface PropsWithShowMore extends Props4 {
	className: boolean
}

export const Tags: React.FC<PropsWithShowMore> = ({ massiv1, status, className }) => {
	const dispatch = useDispatch<any>()
	const [clik, setClick] = useState<any>() // индекс
	const [tagclick1, setTags1] = useState<string>('') // выбранный тег

	// Используем useMemo для оптимизации вычисления уникальных тегов
	const uniqueTags = useMemo(() => {
		if (!massiv1 || !Array.isArray(massiv1)) return [] // Обработка пустого или некорректного массива

		const allTags = new Set() // посмотреть
		massiv1.forEach((element: any) => {
			if (element && typeof element.tags === 'string') {
				const tagsArray = element.tags.toLowerCase().split(',')
				tagsArray.forEach((tag: string) => {
					const trimmedTag = tag.trim()
					if (trimmedTag) {
						allTags.add(trimmedTag)
					}
				})
			}
		})
		return Array.from(allTags)
	}, [massiv1])

	useEffect(() => {
		dispatch(setTags(tagclick1))
	}, [uniqueTags, tagclick1])

	const handleClick = (argument: string, argument2: number) => {
		setTags1(argument)
		setClick(argument2)
	}

	return (
		<div className='mt-[16px]]'>
			<Stack
				className='inline-block mt-[32px] text-white'
				spacing={{ xs: 2, sm: 4 }}
				direction='row'
				useFlexGap
				sx={{
					alignItems: 'baseline',
					justifyContent: 'flex-end',
					flexWrap: 'wrap',
				}}>
				{status === 'loading' ? (
					[...new Array(6)].map((_, index) => (
						<div key={index}>
							<Chip variant='outlined' label='Загрузка...' />{' '}
						</div>
					))
				) : uniqueTags.length === 0 ? (
					<div>Нет тегов</div>
				) : (
					uniqueTags.slice(0, 15).map((tag: any, index: number, arr: any) => (
						<Chip
							className={'h-[30px] mb-[15px] mr-[5px] border-[#e0e0e0]'}
							key={index}
							onClick={() => handleClick(tag, index)} // для передачи в Redux, затем после в отрисовку
							label={tag}
							variant='outlined'
							clickable
							style={
								arr[clik] === arr[index]
									? { color: '#ee661c', backgroundColor: '#f5f5f5' }
									: className
									? { color: 'white' }
									: { color: '#212121' }
							}
						/>
					))
				)}
			</Stack>
		</div>
	)
}
