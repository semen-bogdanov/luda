'use client'
import { ContainerBox } from '@/shared/components/container'
import { fetchPosts } from '@/shared/store/slices/posts'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SkeletonPost } from './skeleton'

// type PropsPost = {
// 	imgCart: string
// 	textH1: string
// 	tegi: string
// 	text: string
// }

// пост
export const PageId = () => {
	const params = useParams()
	let id = params.id
	const [massiv, setMassiv] = useState<any>(null)
	const [likes, setLikes] = useState<number>(0)
	const [numlikes, setNumLikes] = useState<number>(0) // текущее значение, которое сейчас в массиве
	const [pluslikes, setPlusLikes] = useState<number>(0)
	const dispatch = useDispatch<any>()
	const { posts } = useSelector((state: any) => state.posts)

	useEffect(() => {
		dispatch(fetchPosts())
		window.scrollTo(0, 0) // авоматическая прокрутка на вверх
	}, [])

	useEffect(() => {
		setMassiv(posts.items)
	}, [posts, massiv])

	let massiv1: any = []
	massiv?.length ? (massiv1 = massiv.filter((element: any) => element.id == id)) : massiv1

	// Двойной клик по Like
	const doubleClick = (click: number) => {
		click === likes ? setLikes(0) : setLikes(click)
		if ((likes === 0 && click === 2) || (likes === 1 && click === 2)) {
			setPlusLikes(-1)
		}
		if ((likes === 0 && click === 1) || (likes === 2 && click === 1)) {
			setPlusLikes(1)
		}
		if ((likes === 1 && click === 1) || (likes === 2 && click === 2)) {
			setPlusLikes(0)
		}
	}

	return (
		<>
			{posts.status !== 'loaded' ? (
				<ContainerBox className='mt-[50px]'>
					<SkeletonPost />
				</ContainerBox>
			) : (
				massiv1.map((element: any, index: number) => (
					<div key={index}>
						<ContainerBox className='mt-[50px]'>
							<Typography variant='h1' className='font-semibold text-[28px] text-primary mb-[15px]'>
								{element.title}
							</Typography>
							<Typography className='font-semibold text-[14px] mb-[15px]'>
								ТЕГИ: {element.tags}
							</Typography>
							{/* 	//! Image: fill={true} и position: relative обязаьельны если не известен размер изображения */}
							<Image
								className='cursor-pointer'
								src={element.picture ? element.picture : null}
								alt='картинка поста'
								fill={true}
							/>
							<div className='flex'>
								<IconButton onClick={() => doubleClick(1)} aria-label='ThumbUpIcon'>
									<ThumbUpIcon className={likes === 1 ? `fill-primary` : `fill-grayLuda`} />
								</IconButton>
								<span className='flex text-primary font-semibold items-center mr-[10px]'>
									{pluslikes + numlikes}
								</span>
								<IconButton onClick={() => doubleClick(2)} aria-label='ThumbDownAltIcon'>
									<ThumbDownAltIcon className={likes === 2 ? `fill-primary` : `fill-grayLuda`} />
								</IconButton>
							</div>
							<Typography className='font-semibold text-[16px] mt-[25px] text-justify'>
								{element.text}
							</Typography>
						</ContainerBox>
					</div>
				))
			)}
		</>
	)
}

export default PageId
