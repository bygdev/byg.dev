import { Fragment } from 'react'
import Me from '../components/Me'
import Stats from '../components/Stats'
import Icons from '../components/Icons'
import Dog from '../components/Dog'

export default () => (
	<Fragment>
		<Me />
		<div className='w-full'>
			<div className='mx-auto max-w-4xl px-4 mt-4 md:mt-6'>
				<div className='grid grid-cols-2 gap-4 md:gap-6'>
					<div className='md:col-span-1 col-span-2'>
						<Stats />
					</div>
					<div className='md:col-span-1 col-span-2'>
						<Icons />
						<Dog />
					</div>
				</div>
			</div>
		</div>
	</Fragment>
)
