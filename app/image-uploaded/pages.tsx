import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function ImageUploadedPage() {
	const searchParams = useSearchParams()
	const imagePath = searchParams.get('path')

	if (!imagePath) {
		return <div>Изображение не загружено.</div>
	}

	return (
		<div>
			<Image
				src={imagePath}
				alt='Загруженное изображение'
				width={500}
				height={500}
				style={{ maxWidth: '500px' }}
				priority
				placeholder='blur' // Добавлено для плавного отображения
			/>
		</div>
	)
}
