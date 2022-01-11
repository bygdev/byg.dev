import { Fragment, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const ImgLoader = ({ src }: { src: string }) => {
	const [loading, setLoading] = useState(true)

	return (
		<Fragment>
			<img
				onLoad={() => setLoading(false)}
				onError={() => setLoading(false)}
				src={src}
				className={`w-full ${loading ? 'hidden' : 'block'}`}
				alt='failed to load image'
			/>
			{loading && <AiOutlineLoading3Quarters className='w-full h-16 animate-spin mx-auto my-4' />}
		</Fragment>
	)
}
export default ImgLoader
