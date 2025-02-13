import erorr404 from '@/public/img/Post/404.jpg'
import { InfoBlock } from '@/shared/components/info-block'

export default function NotfoundPage() {
	return (
		<div className='flex flex-col items-center justify-center mt-40'>
			<InfoBlock
				title='Ошибка 404'
				text='Ошибка 404. Страница не найдена'
				imageUrl={erorr404}
			/>
		</div>
	)
}
