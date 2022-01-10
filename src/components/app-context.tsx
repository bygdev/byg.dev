import { createContext, useState, useEffect, useContext } from 'react'

const AppContext = createContext({
	themeDark: true,
	setThemeDark: (themeDark: boolean) => {},
})

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
	const [themeDark, setThemeDark] = useState(true)

	useEffect(() => {
		setThemeDark(localStorage.getItem('dark') !== '0')
	}, [])

	useEffect(() => {
		document.querySelector('html')?.classList[themeDark ? 'add' : 'remove']('dark')
		localStorage.setItem('dark', themeDark ? '1' : '0')
	}, [themeDark])

	return <AppContext.Provider value={{ themeDark, setThemeDark }}>{children}</AppContext.Provider>
}
