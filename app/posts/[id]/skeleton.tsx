import { Box } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'

export const SkeletonPost = () => {
	return (
		<Box>
			<Skeleton
				className='mb-[10px]'
				variant='rectangular'
				animation='wave'
				height='29px'
				width='600px'
			/>
			<Skeleton
				className='mb-[10px]'
				variant='rectangular'
				animation='wave'
				height='29px'
				width='300px'
			/>
			<Skeleton
				className='mb-[10px]'
				variant='rectangular'
				animation='wave'
				height='667px'
				width='100%'
			/>
			<Skeleton
				className='mb-[10px]'
				variant='rectangular'
				animation='wave'
				height='30px'
				width='100px'
			/>
			<Skeleton
				className='mb-[10px]'
				variant='rectangular'
				animation='wave'
				height='300px'
				width='100%'
			/>
		</Box>
	)
}
