import { useAppContext } from './app-context'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default () => {
	const { themeDark, setThemeDark } = useAppContext()

	return (
		<Fragment>
			<div className='w-full h-16 dark:bg-zinc-900/80 bg-slate-200/80 shadow-sm sticky top-0 left-0 z-10 backdrop-blur-sm'>
				<div className='mx-auto max-w-4xl px-4 h-full flex items-center'>
					<div className='cursor-pointer flex items-center'>
						<img src={require('../assets/img/me.png')} className='h-6 w-6 block mr-2' />
						<div className='underline-animation text-lg'>BYG.DEV</div>
					</div>
					<div className='flex-1' />
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

			<motion.div
				initial='hidden'
				animate='enter'
				exit='exit'
				variants={{
					hidden: { opacity: 0, x: 0, y: 20 },
					enter: { opacity: 1, x: 0, y: 0 },
					exit: { opacity: 0, x: -0, y: 20 },
				}}
				transition={{ duration: 0.4, type: 'easeInOut' }}>
				<div className='min-h-[85vh]'>
					<Outlet />
				</div>
			</motion.div>

			<div className='w-full text-center text-xs text-gray-400'>
				2022@BYG.DEV
				<br className='block md:hidden' />
				<span className='hidden md:inline'>, </span>
				Built with Reactjs & Tailwindcss
			</div>
		</Fragment>
	)
}
