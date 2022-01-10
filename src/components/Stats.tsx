import { useAppContext } from './app-context'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useState, Fragment } from 'react'

// render all the images first
// so when switching dark, the src won't be loaded again every time
const baseUrl = 'https://github-readme-stats.vercel.app/api'
const cardParams = {
	username: 'realByg',
	hide_border: 'true',
	border_radius: '8',
	locale: 'en',
}
const cardColors = {
	text_color: '1e293b',
	bg_color: 'e2e8f0',
}
const cardColorsDark = {
	text_color: 'e2e8f0',
	bg_color: '18181b',
}
const statsCardParams = {
	show_icons: 'true',
	line_height: '30',
}
const langsCardParams = {
	layout: 'compact',
	langs_count: '6',
	hide: 'python',
}
const cards = [
	{
		src: `${baseUrl}?${new URLSearchParams({
			...cardParams,
			...cardColors,
			...statsCardParams,
		}).toString()}`,
		dark: false,
	},
	{
		src: `${baseUrl}?${new URLSearchParams({
			...cardParams,
			...cardColorsDark,
			...statsCardParams,
		}).toString()}`,
		dark: true,
	},
	{
		src: `${baseUrl}/top-langs/?${new URLSearchParams({
			...cardParams,
			...cardColors,
			...langsCardParams,
		}).toString()}`,
		dark: false,
	},
	{
		src: `${baseUrl}/top-langs/?${new URLSearchParams({
			...cardParams,
			...cardColorsDark,
			...langsCardParams,
		}).toString()}`,
		dark: true,
	},
]

export default () => {
	const { themeDark } = useAppContext()

	return (
		<Fragment>
			{cards.map((item) => (
				<div
					className={`w-full mb-4 md:mb-6 ${item.dark === themeDark ? 'block' : 'hidden'}`}
					onClick={() => window.open(`https://github.com/realByg`)}
					key={item.src}>
					<ImgLoader src={item.src} className='cursor-pointer' />
				</div>
			))}
		</Fragment>
	)
}

const ImgLoader = ({ src, className }: { src: string; className?: string }) => {
	const [loading, setLoading] = useState(true)

	return (
		<Fragment>
			<img
				onLoad={() => setLoading(false)}
				onError={() => setLoading(false)}
				src={src}
				className={`w-full ${loading ? 'hidden' : 'block'} ${className}`}
				alt='failed to load image'
			/>
			{loading && <AiOutlineLoading3Quarters className='w-full h-16 animate-spin mx-auto my-4' />}
		</Fragment>
	)
}
