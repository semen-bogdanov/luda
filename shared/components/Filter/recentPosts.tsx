import { cn } from '@/shared/lib/utils'
import { Typography } from '@mui/material'
import React from 'react'

type Props4 = {
	text: string
	className?: string
}

export const RecentPosts: React.FC<Props4> = ({ text, className }) => {
	return (
		<Typography variant='h3' className={cn('mt-[56px] font-semibold text-[20px]', className)}>
			{text}
		</Typography>
	)
}
