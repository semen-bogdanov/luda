import Image1 from '@/public/img/Post/access_denied.jpg'
import { InfoBlock } from '@/shared/components/info-block'

export default function UnauthorizedPage() {
	return (
		<div className='flex flex-col items-center justify-center mt-40'>
			<InfoBlock
				title='Доступ запрещён'
				text='Данную страницу могут просматривать только авторизованные пользователи'
				imageUrl={Image1}
			/>
		</div>
	)
}
