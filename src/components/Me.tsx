import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/plugins/autolinker/prism-autolinker'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/show-invisibles/prism-show-invisibles'
import '../styles/prism.css'

const meCode =
	'<Me\n' +
	`\tname='Byg'\n` +
	`\temail='i@byg.dev'\n` +
	`\twebsite='https://byg.dev/'\n` +
	`\tgithub='https://github.com/realByg'\n/>`

export default () => {
	useEffect(() => {
		Prism.highlightAll()
	}, [])

	return (
		<div className='w-full'>
			<div className='mx-auto max-w-4xl px-4 mt-4 md:mt-6'>
				<div className='grid grid-cols-4 gap-4'>
					<div className='md:col-span-1 col-span-4 w-full h-full flex flex-col justify-center'>
						<img
							src={require('../assets/img/me.png')}
							className='block rounded-full bg-neutral-300 w-40 md:w-52 aspect-square md:mx-0 mx-auto ring-4 md:ring-8 ring-slate-200 dark:ring-zinc-700'
						/>
					</div>
					<div className='md:col-span-3 col-span-4 md:text-2xl text-base rounded-lg overflow-hidden'>
						<pre className='line-numbers'>
							<code className='language-jsx'>{meCode}</code>
						</pre>
					</div>
				</div>
			</div>
		</div>
	)
}
