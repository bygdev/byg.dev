import { useThemeContext } from '../contexts/theme'
import { Fragment } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'
import { VscRepo } from 'react-icons/vsc'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export default () => {
	const { themeDark, setThemeDark } = useThemeContext()
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<Fragment>
			<div className='w-full h-16 dark:bg-zinc-900/80 bg-slate-200/80 shadow-sm sticky top-0 left-0 z-10 backdrop-blur-sm'>
				<div className='mx-auto max-w-4xl px-4 h-full flex items-center'>
					<div className='cursor-pointer flex items-center' onClick={() => navigate('/')}>
						<img src={require('../assets/img/me.png')} className='h-6 w-6 block mr-2' />
						<div className='text-lg'>BYG.DEV</div>
					</div>
					<div className='flex-1' />
					<div
						className={`p-2 rounded-md cursor-pointer mr-4 ${
							location.pathname === '/Projects'
								? 'dark:bg-slate-300 bg-zinc-800 dark:text-slate-800 text-slate-200'
								: 'dark:bg-zinc-800 bg-slate-300'
						}`}
						onClick={() => navigate('/Projects')}>
						<div className='flex items-center'>
							<VscRepo />
							<div className='ml-2 md:block hidden text-xs'>Projects</div>
						</div>
					</div>
					<div
						className='p-2 rounded-md cursor-pointer dark:bg-zinc-800 bg-slate-300'
						onClick={() => setThemeDark(!themeDark)}>
						{themeDark ? (
							<FaSun className='active:rotate-[360deg] transition-all duration-200' />
						) : (
							<FaMoon className='active:rotate-[360deg] transition-all duration-200' />
						)}
					</div>
				</div>
			</div>

			<AnimatePresence exitBeforeEnter initial={true}>
				<div className='min-h-[80vh]'>
					<div className='mx-auto max-w-4xl px-4 mt-4 md:mt-6'>
						<Outlet />
					</div>
				</div>
			</AnimatePresence>

			<div className='w-full text-center text-xs text-gray-400 my-4'>
				2022@BYG.DEV
				<br className='block md:hidden' />
				<span className='hidden md:inline'>, </span>
				Built with Reactjs & Tailwindcss
			</div>
		</Fragment>
	)
}
