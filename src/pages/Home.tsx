import Me from '../components/Me'
import { StatsCard, LangsCard } from '../components/ReadMeStats'
import IconWall from '../components/IconWall'
import VoxelDog from '../components/VoxelDog'
import MotionDiv from '../components/MotionDiv'

const ghUsername = 'realByg'

export default () => (
	<MotionDiv>
		<div className='w-full'>
			<Me />
		</div>
		<div className='w-full grid grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6'>
			<div className='md:col-span-1 col-span-2'>
				<div className='w-full'>
					<StatsCard username={ghUsername} />
				</div>
				<div className='w-full mt-4 md:mt-6'>
					<LangsCard username={ghUsername} />
				</div>
			</div>
			<div className='md:col-span-1 col-span-2'>
				<IconWall />
				<VoxelDog />
			</div>
		</div>
	</MotionDiv>
)
