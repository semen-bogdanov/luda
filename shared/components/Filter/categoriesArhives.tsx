import { setCategory } from '@/shared/store/slices/filterInput'
import { Typography } from '@mui/material'
import * as React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SkeletonCategory } from './SkeletonCatgory'

export interface Props4 {
	massiv1: any[]
	status: 'loading' | 'loaded' | 'error'
}

export const CategoriesArhives: React.FC<Props4> = ({ massiv1, status }) => {
	const dispatch = useDispatch<any>()
	const [massiv, setMassiv] = useState<any>(null)
	const [clik, setClick] = useState<number>(0)
	const [quantity, setQuantity] = useState<any>(null) // Количество категорий число
	const [selectedValue, setSelectedValue] = useState<string | null>(null) // выбранная категория

	useEffect(() => {
		setMassiv(massiv1)
	}, [massiv1])

	// Используем useMemo для оптимизации вычисления количества категорий
	const categoriesQuantity = useMemo(() => {
		if (massiv?.length) {
			return massiv.flatMap((element: any) =>
				element.category !== undefined ? element.category : [],
			)
		}
		return []
	}, [massiv])

	useEffect(() => {
		if (categoriesQuantity.length) {
			setQuantity(categoriesQuantity)
		}
	}, [categoriesQuantity, quantity])

	// Используем useMemo для оптимизации вычисления уникальных категорий
	const uniqueCategories1 = useMemo(() => {
		if (massiv?.length) {
			return massiv.reduce((acc: any, current: any) => {
				const concat = acc.find((item: { category: any }) => item.category === current.category)
				if (!concat) {
					return acc.concat([current])
				} else {
					return acc
				}
			}, [])
		}
		return []
	}, [massiv])

	// клик по полю
	useEffect(() => {
		dispatch(setCategory(selectedValue))
	}, [selectedValue])

	const handleClick = (argument: any, argument2: any) => {
		setSelectedValue(argument)
		setClick(argument2)
	}

	return (
		<div className='mt-[32px]'>
			{status !== 'loaded'
				? [...new Array(5)].map((_: any, index: number) => (
						<div key={index}>
							<SkeletonCategory />
						</div>
				  ))
				: uniqueCategories1.map((element: any, index: number, arr: any) => (
						<div key={index}>
							<div className='flex mt-[20px] cursor-pointer justify-between max-w-[250px]'>
								<div>
									<Typography
										onClick={() => handleClick(element.category, index)}
										className='mx-auto max-w-[1170px] pr-2'
										style={
											arr[clik] === arr[index] && selectedValue !== null
												? { color: '#333333' }
												: { color: '#ee661c' }
										}>
										{element.category}
									</Typography>
								</div>
								<Typography className='text-[12px] text-[#666666]  '>
									{quantity?.length
										? quantity.filter(function (element1: any) {
												return element1 === element.category
										  }).length
										: 0}
								</Typography>
							</div>
						</div>
				  ))}
		</div>
	)
}
