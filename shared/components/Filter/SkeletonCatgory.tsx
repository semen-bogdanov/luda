import { Box } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'

type PropsSkeleton = {
	size?: string
}

export const SkeletonCategory: React.FC<PropsSkeleton> = ({ size = `30px` }) => {
	return (
		<>
			<Box className='mb-[10px]'>
				<Skeleton variant='rectangular' animation='wave' height={size} width='270px' />
			</Box>
		</>
	)
}
