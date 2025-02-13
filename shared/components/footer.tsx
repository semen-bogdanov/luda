'use client'

import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../store/slices/posts'
import { ContainerBox } from './container'
import { PostsRecent } from './Filter/postsRecent'
import { RecentPosts } from './Filter/recentPosts'
import { Tags } from './Filter/tags'

export const Footer: React.FC = () => {
	const dispatch = useDispatch<any>()
	const { posts } = useSelector((state: any) => state.posts)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<footer className='mt-[100px]'>
			<div className='bg-[#212121] h-[510px]'>
				<ContainerBox>
					<div className='pt-[100px] flex justify-between'>
						{/* Первый блок */}
						<div className='sm:w-[260px] sm:h-[200px] xs:text-center'>
							<Typography variant='h1' className='text-[48px] text-white cursor-pointer'>
								LOGO
							</Typography>
							<Typography className='text-[14px] text-white  opacity-50 pt-[25px]'>
								Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vestibulum a
								velit ac tristique. Curabitur est tellus, aliquet at urna fringilla.
							</Typography>
							<Button
								className='text-white border-white mt-[20px] w-[120px] h-[35px] mt-[15px] font-semibold'
								variant='outlined'>
								Read More
							</Button>
						</div>

						{/* Второй блок */}
						<div className='hidden sm:block sm:max-w-[270px] sm:text-white sm:ml-[25px]'>
							<RecentPosts text={`Tags`} className={`mt-[25px]`} />
							<Tags
								massiv1={posts.status === 'loaded' ? posts.items : []}
								status={posts.status}
								className={true}
							/>
						</div>

						{/* Третий блок */}
						<div className='hidden md:block md:max-w-[270px] md:text-white md:ml-[25px] '>
							<RecentPosts text={`Recent Posts`} className={`mt-[25px]`} />
							<PostsRecent
								massiv1={posts.status === 'loaded' ? posts.items : []}
								status={posts.status}
								showMore={true}
							/>
						</div>
					</div>
				</ContainerBox>
			</div>
			<div className='bg-[#333333] h-[55px]'>
				<ContainerBox className='flex text-white justify-center pt-[16px]'>
					<Typography className='text-[12px] sm:text-[14px] text-center'>
						Copyright © 2020 Your Company Name All rights reserved
					</Typography>
				</ContainerBox>
			</div>
		</footer>
	)
}
