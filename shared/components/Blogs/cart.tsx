'use client'
import { truncateText } from '@/shared/utils/truncateText'
import { Button, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props2 = {
	id: number
	imgCart: string
	text: string
	textH3: string
	tags: string
}

export const Cart: React.FC<Props2> = ({ id, imgCart, text, textH3, tags }) => {
	return (
		<div className='max-w-[270px] mb-[40px] max-h-[360px] overflow-hidden'>
			<Link href={`posts/${id}`}>
				<Image
					className='cursor-pointer'
					width={270}
					height={156}
					src={imgCart}
					alt={'картинка поста'}
				/>
			</Link>
			<Link href={`posts/${id}`}>
				<Typography
					variant='h3'
					className='font-semibold text-[14px] text-primary mt-[10px] cursor-pointer'>
					{textH3}
				</Typography>
			</Link>
			<Typography className='font-semibold text-[12px] text-grayLuda'>{tags}</Typography>
			<Typography className='font-semibold text-[14px] text-grayLuda mt-[23px]'>
				{truncateText(text, 5)} {/* Используем функцию для обрезки текста */}
			</Typography>
			<Link href={`posts/${id}`}>
				<Button
					className='text-black border-black w-[120px] h-[35px] mt-[15px] font-semibold'
					variant='outlined'>
					Перейти
				</Button>
			</Link>
		</div>
	)
}
