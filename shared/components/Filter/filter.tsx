'use client'

import { fetchPosts } from '@/shared/store/slices/posts'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CategoriesArhives } from './categoriesArhives'
import { PostsRecent } from './postsRecent'
import { RecentPosts } from './recentPosts'
import { CustomizedInputBase } from './search'
import { Tags } from './tags'

export default function Filter() {
	const dispatch = useDispatch<any>()
	const { posts } = useSelector((state: any) => state.posts)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<div className='w-[270px] max-w-[270px]'>
			<CustomizedInputBase />
			<RecentPosts text={`Архив постов`} />
			<PostsRecent
				massiv1={posts.status === 'loaded' ? posts.items : []}
				status={posts.status}
				showMore={false}
			/>
			<RecentPosts text={`Категории`} />
			<CategoriesArhives
				massiv1={posts.status === 'loaded' ? posts.items : []}
				status={posts.status}
			/>
			<RecentPosts text={`Теги`} />
			<Tags
				massiv1={posts.status === 'loaded' ? posts.items : []}
				status={posts.status}
				className={false}
			/>
		</div>
	)
}
