'use client'
import { Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { ContainerBox } from '../container'

type PropsPost = {
	imgCart: StaticImageData
	textH1: string
	tegi: string
	text: string
}

// пост
export const Post: React.FC<PropsPost> = ({ imgCart, textH1, tegi, text }) => {
	return (
		<div>
			<ContainerBox className='mt-[50px]'>
				<Typography variant='h1' className='font-semibold text-[21px] text-[#f17b3a] mb-[25px]'>
					{textH1}
				</Typography>
				<Typography className='font-semibold text-[14px] mb-[25px]'>{tegi}</Typography>
				<Image className='cursor-pointer w-[100%]' src={imgCart} alt={'картинка поста'} />
				<Typography className='font-semibold text-[16px] mt-[25px] text-justify'>{text}</Typography>
			</ContainerBox>
		</div>
	)
}
