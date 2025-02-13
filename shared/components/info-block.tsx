import { cn } from '@/shared/lib/utils'
import { Button, Typography } from '@mui/material'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PropsInfo {
	title: string
	text: string
	className?: string
	imageUrl?: any
}

// Информационный блок
export const InfoBlock: React.FC<PropsInfo> = ({
	className,
	title,
	text,
	imageUrl,
}) => {
	return (
		<div
			className={cn(
				className,
				'flex items-center justify-between w-[840px] gap-12'
			)}
		>
			<div className='flex flex-col'>
				<div className='w-[445px]'>
					<Typography className='font-extrabold' />
					<p className='text-grayLuda text-lg'>{text}</p>
				</div>

				<div className='flex gap-5 mt-11'>
					<Link href='/'>
						<Button
							className='gap-2 text-primary border-primary'
							variant='outlined'
						>
							<ArrowLeft />
							На главную
						</Button>
					</Link>
					<Link href='#'>
						<Button
							className='text-grayLuda border-grayLuda hover:bg-gray-50'
							variant='outlined'
						>
							Обновить
						</Button>
					</Link>
				</div>
			</div>

			<Image src={imageUrl} alt={title} width={300} />
		</div>
	)
}
