import MotionDiv from '../components/MotionDiv'
import { RepoCard } from '../components/ReadMeStats'

const repos = [
	'bygdev/byg.dev',
	'bygdev/ip.byg.dev',
	'realByg/simp-diary',
	'realByg/azure-helper-bot',
	'realByg/office-user-bot',
	'realByg/office-user-auto-create',
]

const Projects = () => (
	<MotionDiv>
		<div className='w-full grid grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6'>
			{repos.map((item) => (
				<div className='md:col-span-1 col-span-2' key={item}>
					<RepoCard usernameRepo={item} />
				</div>
			))}
		</div>
	</MotionDiv>
)
export default Projects
