import { prisma } from '@/prisma/prisma-client' // Импортируем объект prisma для взаимодействия с базой данных.
import { NextRequest, NextResponse } from 'next/server' // Импортируем объекты NextRequest и NextResponse для работы с запросами и ответами.

export async function GET() {
	const users = await prisma.user.findMany() // Выполняем запрос к базе данных с помощью prisma для получения всех пользователей.
	return NextResponse.json(users) // Возвращаем полученных пользователей в виде JSON-ответа.
}

export async function POST(req: NextRequest) {
	const data = await req.json() // Парсим тело запроса в JSON-формат и присваиваем полученный объект переменной data.

	const user = await prisma.user.create({
		data, // Используем данные из тела запроса для создания пользователя.
	})

	return NextResponse.json(user) // Возвращаем созданного пользователя в виде JSON-ответа.
}
