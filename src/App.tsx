import { AppContextProvider } from './components/app-context'
import Layout from './components/Layout'
import Home from './pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'

export default () => (
	<AppContextProvider>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Route>
		</Routes>
	</AppContextProvider>
)
