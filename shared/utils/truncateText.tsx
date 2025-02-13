// Обрезка текста (в карточке, в фильтре - Фрхив постов)

export const truncateText = (text: string, wordCount: number): string => {
	const words = text.split(' ')
	if (words.length <= wordCount) return text
	return words.slice(0, wordCount).join(' ') + '...'
}
