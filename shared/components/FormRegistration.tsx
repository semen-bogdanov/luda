import { zodResolver } from '@hookform/resolvers/zod'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ButtonOrange } from '../ui/ButtonOrange'
import { TFormRegisterValues, formRegisterSchema } from './schemas'

interface Props {
	click1: boolean
	onCloseClick: (page: boolean) => void
}

export const FormRegistration: React.FC<Props> = ({ click1, onCloseClick }) => {
	const form = useForm<TFormRegisterValues>({
		resolver: zodResolver(formRegisterSchema),
		defaultValues: {
			email: '',
			fullName: '',
			password: '',
			confirmPassword: '',
		},
	})

	// const onSubmit = async (data: TFormRegisterValues) => {
	// 	try {
	// 		await registerUser({
	// 			email: data.email,
	// 			fullName: data.fullName,
	// 			password: data.password,
	// 			// verified: '',
	// 			// verified: new Date(),
	// 		})

	// 		toast.error('Регистрация успешна 📝. Подтвердите свою почту', {
	// 			icon: '✅',
	// 		})

	// 		onClose?.()
	// 	} catch (error) {
	// 		return toast.error('Неверный E-Mail или пароль', {
	// 			icon: '❌',
	// 		})
	// 	}
	// }

	const [showPassword, setShowPassword] = React.useState(false)

	const handleClickShowPassword = () => setShowPassword(show => !show)

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
	}

	const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
	}

	return (
		<FormProvider {...form}>
			<React.Fragment>
				<Dialog
					open={click1}
					onClose={() => onCloseClick(false)}
					PaperProps={{
						component: 'form',
						onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
							event.preventDefault()
							const formData = new FormData(event.currentTarget)
							const formJson = Object.fromEntries(formData.entries())
							const email = formJson.email
							console.log(email)
							onCloseClick(false)
						},
					}}>
					<DialogTitle>Регистрация</DialogTitle>
					<DialogContent>
						<DialogContentText className='mb-[10px]'>Заполните поля</DialogContentText>

						<TextField
							autoFocus
							required
							margin='dense'
							id='name'
							name='name'
							label='Имя'
							type='name'
							fullWidth
							variant='filled'
							color='warning'
						/>
						<TextField
							autoFocus
							required
							margin='dense'
							id='name'
							name='email'
							label='Почта'
							type='email'
							fullWidth
							variant='filled'
							color='warning'
						/>
						<FormControl fullWidth variant='filled' className='mt-[20px] '>
							<InputLabel
								color='warning'
								className='text-primary'
								htmlFor='filled-adornment-password'>
								Пароль
							</InputLabel>
							<FilledInput
								id='filled-adornment-password'
								type={showPassword ? 'text' : 'password'}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label={showPassword ? 'hide the password' : 'display the password'}
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											onMouseUp={handleMouseUpPassword}
											edge='end'>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								color='warning'
							/>
						</FormControl>
						<FormControl fullWidth variant='filled' className='mt-[20px]'>
							<InputLabel
								color='warning'
								className='text-primary'
								htmlFor='filled-adornment-password'>
								Повторите пароль
							</InputLabel>
							<FilledInput
								id='filled-adornment-password'
								type={showPassword ? 'text' : 'password'}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label={showPassword ? 'hide the password' : 'display the password'}
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											onMouseUp={handleMouseUpPassword}
											edge='end'>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								color='warning'
							/>
						</FormControl>
					</DialogContent>
					<DialogActions>
						<Button className='text-primary' onClick={() => onCloseClick(false)}>
							Отмена
						</Button>
						<ButtonOrange variant='contained' type='submit'>
							Регистрация
						</ButtonOrange>
					</DialogActions>
				</Dialog>
			</React.Fragment>
		</FormProvider>
	)
}
