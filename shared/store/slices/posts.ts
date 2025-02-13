import axios from '@/shared/axios'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Post {
	id: number
	authorId: number
	token: string
	title: string
	text: string
	picture: string
	category: string
}

interface PostsState {
	items: Post[]
	status: 'loading' | 'loaded' | 'error'
}

interface RootState {
	posts: PostsState
	// tags: {
	// 	items: any[]
	// 	status: 'loading' | 'loaded' | 'error'
	// }
}

// получение постов
export const fetchPosts = createAsyncThunk<Post[], void>('posts/fetchPosts', async () => {
	const { data } = await axios.get('/api/posts')
	return data
})

// получение тегов
// export const fetchTags = createAsyncThunk<any, void>('posts/fetchTags', async () => {
// 	const { data } = await axios.get('/tags')
// 	return data
// })

// удаление постов
// export const fetchRemovePost = createAsyncThunk<any, string>(
// 	'posts/fetchRemovePost',
// 	async (id: any) => {
// 		await axios.delete(`/posts/${id}`)
// 	},
// )

const initialState: RootState = {
	posts: {
		items: [],
		status: 'loading',
	},
	// tags: {
	// 	items: [],
	// 	status: 'loading',
	// },
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			// Получение статей
			.addCase(fetchPosts.pending, state => {
				state.posts.items = []
				state.posts.status = 'loading'
			})
			.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
				state.posts.items = action.payload
				state.posts.status = 'loaded'
			})
			.addCase(fetchPosts.rejected, state => {
				state.posts.items = []
				state.posts.status = 'error'
			})

		// Получение тегов
		// .addCase(fetchTags.pending, state => {
		// 	state.tags.items = []
		// 	state.tags.status = 'loading'
		// })
		// .addCase(fetchTags.fulfilled, (state, action: PayloadAction<any>) => {
		// 	state.tags.items = action.payload
		// 	state.tags.status = 'loaded'
		// })
		// .addCase(fetchTags.rejected, state => {
		// 	state.tags.items = []
		// 	state.tags.status = 'error'
		// })

		// Удаление статей
		// .addCase(fetchRemovePost.pending, (state, action) => {
		// 	state.posts.items = state.posts.items.filter(obj => obj._id !== action.meta.arg)
		// })
	},
})

export const postsReducer = postsSlice.reducer
