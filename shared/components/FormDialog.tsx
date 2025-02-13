import { Visibility, VisibilityOff } from '@mui/icons-material'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { FormControl, IconButton, InputAdornment, ListItemIcon } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import { useState } from 'react'
import { ButtonOrange } from '../ui/ButtonOrange'
import { FormRegistration } from './FormRegistration'
import { validateEmail, validatePassword } from './validate' // валидация формы

interface Props {
	click?: boolean
	setClick?: any
}

interface FormValues {
	email: string
	password: string
}

export const FormDialog: React.FC<Props> = ({ click = false, setClick }) => {
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [registration, setRegistration] = useState<boolean>(false)
	const [open, setOpen] = useState<boolean>(click)

	const [formValues, setFormValues] = useState<FormValues>({ email: '', password: '' })
	const [errors, setErrors] = useState<any>({})
	const [submitted, setSubmitted] = useState(false)

	const handleClickShowPassword = () => setShowPassword(show => !show)

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
	}

	const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
	}

	// Открыть форму авторизации
	const handleClickOpen = () => {
		setOpen(true)
		if (click) {
			setClick(true)
		}
	}

	// Закрыть форму авторизации
	const handleClose = () => {
		setOpen(false)
		if (click) {
			setClick(false)
		}
	}

	// Закрыть форму регистрации
	const onCloseClick = (click1: boolean) => {
		setRegistration(click1)
		setOpen(false)
		if (click) {
			setClick(click1)
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		const updatedValues = { ...formValues, [name]: value }
		setFormValues(updatedValues)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const emailError = validateEmail(formValues.email)
		const passwordError = validatePassword(formValues.password)

		const newErrors = {
			email: emailError,
			password: passwordError,
		}

		setErrors(newErrors)

		if (newErrors.email !== '' || newErrors.password !== '') {
			setOpen(true)
			if (click) {
				setClick(true)
			}
		}

		// Проверьте наличие ошибок и отправляйте только в случае их отсутствия.
		if (!emailError && !passwordError) {
			setSubmitted(true)
			console.log('Форма успешно отправлена:', formValues)
			// Добавьте здесь вашу фактическую логику отправки формы
		}
	}

	return (
		<>
			{/* {mess ? (
				<Alert className='absolute flex justify-center' severity='warning'>
					Не правильный логин или пароль! Не удалось авторизоваться!{' '}
				</Alert>
			) : (
				<> </>
			)} */}

			<form onSubmit={handleSubmit}>
				<FormRegistration click1={registration} onCloseClick={onCloseClick} />
				<React.Fragment>
					{click === false ? (
						<ListItemIcon onClick={handleClickOpen}>
							<PersonOutlineIcon className='fill-black cursor-pointer text-[26px] ml-[50px]' />
						</ListItemIcon>
					) : (
						<></>
					)}
					<Dialog
						open={open}
						onClose={handleClose}
						PaperProps={{
							component: 'form',
							onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
								event.preventDefault()
								const formData = new FormData(event.currentTarget)
								const formJson = Object.fromEntries(formData.entries())
								const email = formJson.email
								// console.log(email)
								handleClose()
							},
						}}>
						<DialogTitle>Авторизация</DialogTitle>
						<DialogContent>
							<DialogContentText className='mb-[10px]'>Введите почту и пароль</DialogContentText>
							<FormControl className='mt-[20px] h-[80px]' fullWidth sx={{ marginBottom: '1rem' }}>
								<TextField
									id='email-input'
									name='email'
									label='Почта'
									type='email'
									value={formValues.email}
									onChange={handleChange}
									error={!!errors.email}
									helperText={errors.email}
									variant='outlined'
									color='warning'
								/>
							</FormControl>

							<FormControl fullWidth sx={{ marginBottom: '1rem' }}>
								<div className='flex justify-end '>
									<TextField
										className='w-[100%] h-[35px]'
										id='password-input'
										name='password'
										label='Пароль'
										type={showPassword ? 'text' : 'password'}
										value={formValues.password}
										onChange={handleChange}
										error={!!errors.password}
										helperText={errors.password}
										variant='outlined'
										color='warning'
									/>
									<div className='mt-[10px]'>
										<InputAdornment position='end'>
											<IconButton
												aria-label={showPassword ? 'hide the password' : 'display the password'}
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												onMouseUp={handleMouseUpPassword}>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									</div>
								</div>
							</FormControl>
						</DialogContent>

						<DialogActions>
							<Button className='bg-primary text-white' onClick={handleClose}>
								Отмена
							</Button>
							<Button className='bg-primary' type='submit' variant='contained'>
								Войти
							</Button>
						</DialogActions>
						<DialogActions>
							<ButtonOrange
								className='bg-primary'
								variant='contained'
								startIcon={<HowToRegIcon />}
								onClick={() => onCloseClick(true)}>
								Регистрация
							</ButtonOrange>
						</DialogActions>
					</Dialog>
				</React.Fragment>
			</form>
		</>
	)
}
