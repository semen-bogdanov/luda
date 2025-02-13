import { prisma } from '@/prisma/prisma-client' // Импортируем объект prisma для взаимодействия с базой данных.
import { NextRequest, NextResponse } from 'next/server' // Импортируем объекты NextRequest и NextResponse для работы с запросами и ответами.

// получение постов
export async function GET() {
	const posts = await prisma.post.findMany() // Выполняем запрос к базе данных с помощью prisma для получения всех пользователей.
	return NextResponse.json(posts) // Возвращаем полученных пользователей в виде JSON-ответа.
}

// создание поста
export async function POST(req: NextRequest) {
	const data = await req.json() // Парсим тело запроса в JSON-формат и присваиваем полученный объект переменной data.

	const post = await prisma.post.create({
		data, // Используем данные из тела запроса для создания пользователя.
	})

	return NextResponse.json(post) // Возвращаем созданного пользователя в виде JSON-ответа.
}

// удаление поста
export async function DELETE(req: NextRequest) {
	const { postId } = await req.json() // Получаем id поста из тела запроса

	try {
		const deletedPost = await prisma.post.delete({
			where: { id: postId },
		})
		if (deletedPost) {
			return NextResponse.json(deletedPost, { status: 200 })
		} else {
			return NextResponse.json({ error: 'Сообщение не найдено' }, { status: 404 })
		}
	} catch (error) {
		console.error('Ошибка удаления сообщения:', error)
		return NextResponse.json({ error: 'Не удалось удалить сообщение' }, { status: 500 })
	}
}

// Обновление поста
export async function PUT(req: NextRequest) {
	try {
		const updatedData = await req.json()

		if (!updatedData || !updatedData.postId || !updatedData.data) {
			return NextResponse.json({ error: 'Некорректные данные для обновления' }, { status: 400 })
		}

		const postId = updatedData.postId
		const updateData = updatedData.data

		const updatedPost = await prisma.post.update({
			where: { id: postId },
			data: updateData,
		})

		if (updatedPost) {
			return NextResponse.json(updatedPost, { status: 200 })
		} else {
			return NextResponse.json({ error: 'Пост не найден' }, { status: 404 })
		}
	} catch (error) {
		console.error('Ошибка обновления поста:', error)
		return NextResponse.json({ error: 'Не удалось обновить пост' }, { status: 500 })
	}
}
