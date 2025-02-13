'use client'
import { SkeletonCart } from '@/shared/components/SkeletonCart'
import { fetchPosts } from '@/shared/store/slices/posts'
import { Button, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// type Props2 = {
// 	id: number
// 	imgCart: string
// 	text: string
// 	textH3: string
// 	tags: string
// }

// { id, imgCart, text, textH3, tags }

export const Cart: React.FC = () => {
	const dispatch = useDispatch<any>()
	const { posts } = useSelector((state: any) => state.posts)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	// Обрезка текста в карточке
	const truncateText = (text: string, wordCount: number): string => {
		const words = text.split(' ')
		if (words.length <= wordCount) return text
		return words.slice(0, wordCount).join(' ') + '...'
	}

	return (
		<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
			{posts.status !== 'loaded'
				? [...new Array(12)].map((_: any, index: number) => (
						<div key={index}>
							<SkeletonCart />
						</div>
				  ))
				: posts.items.map((element: any, index: number) => (
						<div key={index}>
							<div className='max-w-[270px] mb-[40px] max-h-[360px] overflow-hidden'>
								<Link href={`posts/${element.id}`}>
									<Image
										className='cursor-pointer'
										width={270}
										height={156}
										src={element.picture}
										alt={'картинка поста'}
									/>
								</Link>

								<Link href={`posts/${element.id}`}>
									<Typography
										variant='h3'
										className='font-semibold text-[14px] text-primary mt-[10px] cursor-pointer'>
										{element.title}
									</Typography>
								</Link>
								<Typography className='font-semibold text-[12px] text-grayLuda'>
									{element.tags}
								</Typography>
								<Typography className='font-semibold text-[14px] text-grayLuda mt-[23px]'>
									{truncateText(element.text, 5)} {/* Используем функцию для обрезки текста */}
								</Typography>
								<div className='flex justify-between'>
									<Link href={``}>
										<Button
											className='text-primary border-primary w-[120px] h-[35px] mt-[15px] font-semibold'
											variant='outlined'>
											ИЗМЕНИТЬ
										</Button>
									</Link>
									<Link href={``}>
										<Button
											className='text-black border-black w-[100px] h-[35px] mt-[15px] font-semibold'
											variant='outlined'>
											УДАЛИТЬ
										</Button>
									</Link>
								</div>
							</div>
						</div>
				  ))}
		</Grid>
	)
}
