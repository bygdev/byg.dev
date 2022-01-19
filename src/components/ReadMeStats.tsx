import { useThemeContext } from '../contexts/theme'
import { Fragment } from 'react'
import ImgLoader from './ImgLoader'

type Card = {
	src: string
	dark: boolean
}

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
const Card = ({ cards }: { cards: Card[] }) => {
	const { themeDark } = useThemeContext()

	return (
		<Fragment>
			{cards.map((item) => (
				<div
					className={`w-full cursor-pointer ${item.dark === themeDark ? 'block' : 'hidden'}`}
					onClick={() => window.open(`https://github.com/realByg`)}
					key={item.src}>
					<ImgLoader src={item.src} />
				</div>
			))}
		</Fragment>
	)
}

const statsCardParams = {
	show_icons: 'true',
	line_height: '30',
}
export const StatsCard = () => (
	<Card
		cards={[
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
		]}
	/>
)

const langsCardParams = {
	layout: 'compact',
	langs_count: '6',
	// hide: 'python',
}
export const LangsCard = () => (
	<Card
		cards={[
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
		]}
	/>
)

export const RepoCard = ({ repo }: { repo: string }) => (
	<Card
		cards={[
			{
				src: `${baseUrl}/pin/?${new URLSearchParams({
					...cardParams,
					...cardColors,
					repo,
				}).toString()}`,
				dark: false,
			},
			{
				src: `${baseUrl}/pin/?${new URLSearchParams({
					...cardParams,
					...cardColorsDark,
					repo,
				}).toString()}`,
				dark: true,
			},
		]}
	/>
)
