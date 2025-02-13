'use client'
import { cn } from '@/shared/lib/utils'
import { truncateText } from '@/shared/utils/truncateText'
import { Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Props4 } from './categoriesArhives'
import { SkeletonCategory } from './SkeletonCatgory'

interface PropsWithShowMore extends Props4 {
	showMore: boolean
}

export const PostsRecent: React.FC<PropsWithShowMore> = ({ massiv1, status, showMore }) => {
	const [massiv, setMassiv] = useState<any>([]) // Массив посмотов для Архива

	useEffect(() => {
		status === 'loaded' && massiv1 ? setMassiv(massiv1.slice(16, 20)) : setMassiv([])
	}, [massiv1])

	return (
		<div className='mt-[32px] w-[270px] '>
			{status !== 'loaded'
				? [...new Array(4)].map((_: any, index: number) => (
						<div key={index}>{<SkeletonCategory size={`55px`} />}</div>
				  ))
				: massiv.map((element: any, index: number) => (
						<Link className='h-[55px] mb-[15px] flex ' key={index} href={`posts/${element.id}`}>
							<div className='flex  mb-[20px] cursor-pointer h-[55px] relative '>
								<Image
									className='w-[55px] h-[55px] object-cover'
									width={55}
									height={55}
									src={element.picture}
									alt={element.title || 'архив статей'}
									sizes='(max-width: 55px) 100vw, 55px' // важно для правильной отрисовки
									// layout='responsive'
									// objectFit='cover'
									// priority
								/>
								<div className='block w-[200px] ml-[25px]'>
									<Typography
										className={cn(
											'text-[14px]  font-semibold',
											showMore ? 'text-white' : 'text-primary',
										)}>
										{element.title}
									</Typography>
									<Typography
										className={cn('text-[12px]', showMore ? 'text-white' : 'text-[#202020]')}>
										{truncateText(element.text, 3)}
									</Typography>
								</div>
							</div>
						</Link>
				  ))}
		</div>
	)
}
