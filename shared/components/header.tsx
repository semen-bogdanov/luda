'use client'

import { Typography } from '@mui/material'
import Link from 'next/link'
import AccountMenu from './accountMenu'
import { ContainerBox } from './container'
import { FormDialog } from './FormDialog'
import CustomizedMenus from './styledMenu'

export default function Header() {
	return (
		<header className='flex h-24 bg-white items-center'>
			<ContainerBox className='flex items-center justify-between'>
				<Link href='/'>
					<Typography variant='h1' className='text-[48px] text-[#333333] cursor-pointer'>
						LOGO
					</Typography>
				</Link>
				<div className='hidden sm:flex'>
					<div className='flex text-[12px] font-[600] lg:text-[14px] uppercase items-center justify-between w-[450px] '>
						<Link href='/'>Home</Link>
						<Link href='/'>Pages</Link>
						<Link href='/'>Blog</Link>
						<Link className='underline' href='/account'>
							Личный кабинет
						</Link>
					</div>

					<FormDialog />
				</div>
				{/* бургер меню */}
				<div className='flex sm:hidden'>
					<AccountMenu />
				</div>
				{/* фильтрация мобильная */}
				<div className='flex sm:hidden'>
					<CustomizedMenus />
				</div>
			</ContainerBox>
		</header>
	)
}
