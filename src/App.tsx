import { ThemeContextProvider } from './contexts/theme'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { Routes, Route, Navigate } from 'react-router-dom'

export default () => (
	<ThemeContextProvider>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='Projects' element={<Projects />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Route>
		</Routes>
	</ThemeContextProvider>
)
