import { Box } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'

export const SkeletonCart = () => {
	return (
		<>
			<Box className='mb-[40px]'>
				<Skeleton variant='rectangular' animation='wave' height='155px' width='270px' />
				<Skeleton
					className='mt-[15px]'
					variant='rectangular'
					animation='wave'
					height='10px'
					width='226px'
				/>
				<Skeleton
					className='mt-[5px]'
					variant='rectangular'
					animation='wave'
					height='10px'
					width='200px'
				/>
				<Skeleton
					className='mt-[15px]'
					variant='rectangular'
					animation='wave'
					height='80px'
					width='270px'
				/>
				<Skeleton
					className='mt-[15px]'
					variant='rectangular'
					animation='wave'
					height='36px'
					width='120px'
				/>
			</Box>
		</>
	)
}
