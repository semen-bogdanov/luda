import { PrismaClient } from '@prisma/client'
import { hashSync } from 'bcrypt'

const prisma = new PrismaClient()

// up - генерация данных
async function up() {
	// 4:26:00 - create - создание одного объекта. createMany - любое кол-во объектов т.е. create будет делать несколько раз.
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User Test',
				role: 'USER',
				email: 'user@test.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
			},
			{
				fullName: 'Admin Admin',
				role: 'ADMIN',
				email: 'admin@test.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
			},
			{
				fullName: 'Semen Admin',
				role: 'ADMIN',
				email: 'admin1@test1.ru',
				password: hashSync('123456', 10),
				verified: new Date(),
			},
		],
	})

	await prisma.post.createMany({
		data: [
			{
				authorId: 1, // ID пользователя, который создал пост (первый пользователь из массива users)
				token: 'token1',
				title: 'Post Title 1',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_1.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 2',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_2.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 3',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_3.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 4',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_4.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 5',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_5.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 6',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_6.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 7',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_7.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 8',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_8.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 9',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_9.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 10',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_10.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 11',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_11.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 12',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_12.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Машиностроение',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 13',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_13.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Машиностроение',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 14',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_14.jpg',
				tags: 'инженер, ученый, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 15',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_15.jpg',
				tags: 'инженер, бюро, чертежи',
				category: 'Инженерия',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 16',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_16.jpg',
				tags: 'автомобиль, бюро, автопром',
				category: 'Автомобилестроение',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 17',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_17.jpg',
				tags: 'автомобиль, бюро, lada',
				category: 'Автомобилестроение',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 18',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_18.jpg',
				tags: 'самолёт, авиастроение, ангар',
				category: 'Авиастроение',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 19',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_19.jpg',
				tags: 'самолёт, авиастроение, ангар',
				category: 'Авиастроение',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 20',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_20.jpg',
				tags: 'паровоз, машиностроение, бюро',
				category: 'Машиностроение',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 21',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_21.jpg',
				tags: 'паровоз, машиностроение, бюро',
				category: 'Машиностроение',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 22',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_22.jpg',
				tags: 'робот, роботостроение, чертеж',
				category: 'Роботостроение',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 23',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_23.jpg',
				tags: 'робот, роботостроение, чертеж',
				category: 'Роботостроение',
			},
			{
				authorId: 2, // ID пользователя, который создал пост (второй пользователь из массива users)
				token: 'token2',
				title: 'Post Title 24',
				text: 'Предварительные выводы неутешительны: семантический разбор внешних противодействий не оставляет шанса для системы массового участия. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что перспективное планирование выявляет срочную потребность укрепления моральных ценностей. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи. И нет сомнений, что диаграммы связей являются только методом политического участия и заблокированы в рамках своих собственных рациональных ограничений. Не следует, однако, забывать, что существующая теория напрямую зависит от укрепления моральных ценностей.',
				picture: '/img/Post/post_270x156/post_270x156_24.jpg',
				tags: 'робот, роботостроение, чертеж',
				category: 'Роботостроение',
			},
		],
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Post" RESTART IDENTITY CASCADE;`
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.error(e)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
