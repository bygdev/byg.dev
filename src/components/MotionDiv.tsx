import { motion } from 'framer-motion'

const MotionDiv = ({ children }: { children: JSX.Element | JSX.Element[] | string }) => (
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
		{children}
	</motion.div>
)
export default MotionDiv
