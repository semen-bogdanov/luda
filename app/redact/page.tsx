'use client'

import { ContainerBox, Props } from '@/shared/components/container'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

const Redact: React.FC<Props> = ({ className }) => {
	// title    String
	// text     String
	// picture  String
	// tags     String
	// category String

	const [currency, setCurrency] = useState('Выберите категорию')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrency(event.target.value)
	}

	const currencies = [
		{
			value: 'Engineering',
			label: 'Инженерия',
		},
		{
			value: 'Mechanical_engineering',
			label: 'Машиностроение',
		},
		{
			value: 'Automotive_industry',
			label: 'Автомобилестроение',
		},
		{
			value: 'Aircraft_industry',
			label: 'Авиастроение',
		},
		{
			value: 'Robotics',
			label: 'Роботостроение',
		},
	]

	return (
		<ContainerBox>
			<Typography className='text-center uppercase mt-[60px]' variant='h4'>
				{className ? `Создать статью` : `Редактировать статью`}
			</Typography>
			<FormControl
				className='mt-[60px] h-[100%]'
				fullWidth
				sx={{ marginBottom: '1rem' }}
			>
				<TextField
					id='article-input'
					name='text'
					label='Название статьи'
					type='text'
					variant='outlined'
					color='warning'
				/>

				<TextField
					className='mt-[20px]'
					id='outlined-select-currency'
					select
					label='Выберите категорию'
					value={currency}
					onChange={handleChange}
					color='warning'
				>
					{currencies.map(option => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>

				<TextField
					className='mt-[20px]'
					id='article-input'
					label='Текст статьи'
					multiline
					rows={4}
					color='warning'
				/>

				<TextField
					className='mt-[20px]'
					id='article-input'
					name='text'
					label='Теги'
					type='text'
					variant='outlined'
					color='warning'
				/>

				<Button
					className='mt-[40px] h-[40px] bg-primary'
					type='submit'
					variant='contained'
				>
					{className ? `Создать статью` : `Изменить статью`}
				</Button>
			</FormControl>
		</ContainerBox>
	)
}

export default Redact
