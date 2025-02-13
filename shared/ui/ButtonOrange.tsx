import { ButtonProps } from '@mui/material'
import Button from '@mui/material/Button'
import { createTheme, styled } from '@mui/material/styles'

export const themeOrange = createTheme({
	palette: {
		primary: {
			main: '#ee661c',
		},
		secondary: {
			main: '#fe7b35',
		},
	},
})

// цвет кнопки регистрация
export const ButtonOrange = styled(Button)<ButtonProps>(() => ({
	backgroundColor: themeOrange.palette.primary.main,
	'&:hover': {
		backgroundColor: themeOrange.palette.secondary.main,
	},
}))
