import MotionDiv from '../components/MotionDiv'
import { RepoCard } from '../components/ReadMeStats'

const ghRepos = [
	'ip-lookup',
	'simp-diary',
	'azure-helper-bot',
	'office-user-bot',
	'office-user-auto-create',
]

const Projects = () => (
	<MotionDiv>
		<div className='w-full grid grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6'>
			{ghRepos.map((repo) => (
				<div className='md:col-span-1 col-span-2' key={repo}>
					<RepoCard repo={repo} />
				</div>
			))}
		</div>
	</MotionDiv>
)
export default Projects
