'use client'
import { store } from '@/shared/store/store'
import { Provider } from 'react-redux'

function ProvidersStore({ children }: { children: React.ReactNode }) {
	return <Provider store={store}>{children}</Provider>
}

export default ProvidersStore
