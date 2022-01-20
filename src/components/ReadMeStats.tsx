import { useThemeContext } from '../contexts/theme'
import { Fragment } from 'react'
import ImgLoader from './ImgLoader'

type Card = {
	src: string
	dark: boolean
}

const baseUrl = 'https://github-readme-stats.vercel.app/api'
const cardParams = {
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
const Card = ({ cards, link }: { cards: Card[]; link: string }) => {
	const { themeDark } = useThemeContext()

	return (
		<Fragment>
			{cards.map((item) => (
				<div
					className={`w-full cursor-pointer ${item.dark === themeDark ? 'block' : 'hidden'}`}
					onClick={() => window.open(link)}
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
export const StatsCard = ({ username }: { username: string }) => (
	<Card
		link={`https://github.com/${username}`}
		cards={[
			{
				src: `${baseUrl}?${new URLSearchParams({
					...cardParams,
					...cardColors,
					...statsCardParams,
					username,
				}).toString()}`,
				dark: false,
			},
			{
				src: `${baseUrl}?${new URLSearchParams({
					...cardParams,
					...cardColorsDark,
					...statsCardParams,
					username,
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
export const LangsCard = ({ username }: { username: string }) => (
	<Card
		link={`https://github.com/${username}`}
		cards={[
			{
				src: `${baseUrl}/top-langs/?${new URLSearchParams({
					...cardParams,
					...cardColors,
					...langsCardParams,
					username,
				}).toString()}`,
				dark: false,
			},
			{
				src: `${baseUrl}/top-langs/?${new URLSearchParams({
					...cardParams,
					...cardColorsDark,
					...langsCardParams,
					username,
				}).toString()}`,
				dark: true,
			},
		]}
	/>
)

export const RepoCard = ({ usernameRepo }: { usernameRepo: string }) => (
	<Card
		link={`https://github.com/${usernameRepo}`}
		cards={[
			{
				src: `${baseUrl}/pin/?${new URLSearchParams({
					...cardParams,
					...cardColors,
					username: usernameRepo.split('/')[0],
					repo: usernameRepo.split('/')[1],
				}).toString()}`,
				dark: false,
			},
			{
				src: `${baseUrl}/pin/?${new URLSearchParams({
					...cardParams,
					...cardColorsDark,
					username: usernameRepo.split('/')[0],
					repo: usernameRepo.split('/')[1],
				}).toString()}`,
				dark: true,
			},
		]}
	/>
)
