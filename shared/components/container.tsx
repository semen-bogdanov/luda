import { cn } from '@/shared/lib/utils'
import { Container } from '@mui/material'
import React from 'react'

export interface Props {
	className?: string
}

// container. Центрирует элемент (mx-auto max-w-[1170px] и задает максимальную ширину)
export const ContainerBox: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
	return (
		<Container className={cn('mx-auto max-w-[1170px] pl-2 pr-2', className)}>{children}</Container>
	)
}
