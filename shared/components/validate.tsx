export const validateEmail = (email: string): string | null => {
	const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
	if (!emailRegex.test(email)) {
		return 'Неверный формат e-mail'
	}
	return null
}

export const validatePassword = (password: string): string | null => {
	if (password.length < 8) {
		return 'Введите не менее 8 символов.'
	}
	return null
}
