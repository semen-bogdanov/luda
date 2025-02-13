'use client'
import Banner from '@/shared/components/Banner/banner'
import { Blogs } from '@/shared/components/Blogs/blogs'
import { ContainerBox } from '@/shared/components/container'
import Filter from '@/shared/components/Filter/filter'

export default function Home() {
	return (
		<div>
			<Banner />
			<ContainerBox className='flex mt-[100px]'>
				<div className='hidden sm:flex '>
					<Filter />
				</div>
				<div>
					<Blogs />
				</div>
			</ContainerBox>
		</div>
	)
}
