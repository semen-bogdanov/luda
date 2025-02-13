/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { ContainerBox } from '@/shared/components/container'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import {
	Button,
	DialogContent,
	DialogTitle,
	FormControl,
	TextField,
	Typography,
} from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import React from 'react'
import { Cart } from './cart'

const personalAccount = () => {
	const [value, setValue] = React.useState('1')

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}

	// стилизация TAB
	const StyledTabList = styled(TabList)(({ theme }) => ({
		[`& .MuiTouchRipple-root css-r3djoj-MuiTouchRipple-root`]: {
			color: '#ef671d',
			textTransform: 'capitalize',
		},

		[`& .css-1qltlow-MuiTabs-indicator`]: {
			color: '#ef671d',
			backgroundColor: '#ef671d',
			textTransform: 'capitalize',
		},
		[`& .css-1usuzwp-MuiButtonBase-root-MuiTab-root.Mui-selected`]: {
			color: '#ef671d',
		},
	}))

	return (
		<ContainerBox className='mt-[50px]'>
			<Typography className='text-center uppercase h-[80px]' variant='h4'>
				Личный кабинет
			</Typography>
			<Box sx={{ width: '100%', typography: 'body1' }}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<StyledTabList onChange={handleChange} aria-label='lab API tabs example'>
							<Tab label='Персональные данные' value='1' />
							<Tab label='Статьи' value='2' />
						</StyledTabList>
					</Box>
					<TabPanel value='1'>
						<DialogTitle>Изменить личные данные</DialogTitle>
						<DialogContent>
							<FormControl className='mt-[20px] h-[60px]' fullWidth sx={{ marginBottom: '1rem' }}>
								<TextField
									id='email-input'
									name='email'
									label='Почта'
									type='email'
									variant='outlined'
									color='warning'
								/>
							</FormControl>
							<FormControl className='mt-[20px] h-[60px]' fullWidth sx={{ marginBottom: '1rem' }}>
								<div className='flex justify-end '>
									<TextField
										className='w-[100%] h-[35px]'
										id='password-input'
										name='password'
										label='Пароль'
										variant='outlined'
										color='warning'
									/>
								</div>
							</FormControl>
							<FormControl fullWidth sx={{ marginBottom: '1rem' }}>
								<div className='flex justify-end '>
									<TextField
										className='w-[100%] h-[35px]'
										id='password-input'
										name='password'
										label='Повторите пароль'
										variant='outlined'
										color='warning'
									/>
								</div>
							</FormControl>
							<Button className='mt-[40px] h-[40px] bg-primary' type='submit' variant='contained'>
								ИЗМЕНИТЬ
							</Button>
						</DialogContent>
					</TabPanel>
					<TabPanel value='2'>
						<Cart />
					</TabPanel>
				</TabContext>
			</Box>
		</ContainerBox>
	)
}

export default personalAccount
