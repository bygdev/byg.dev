import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const VoxelDog = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const setSize = () => {
			const cWidth = containerRef.current?.offsetWidth || 420
			renderer.setPixelRatio(window.devicePixelRatio)
			renderer.setSize(cWidth, cWidth)
		}

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		})
		renderer.outputEncoding = THREE.sRGBEncoding
		setSize()
		containerRef.current?.appendChild(renderer.domElement)

		const initCamPos = new THREE.Vector3(
			20 * Math.sin(0.2 * Math.PI),
			10,
			20 * Math.cos(0.2 * Math.PI)
		)
		const scale = 6
		const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000)
		camera.position.copy(initCamPos)
		const target = new THREE.Vector3(-0.5, 1.2, 0)
		camera.lookAt(target)

		const scene = new THREE.Scene()
		const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
		scene.add(ambientLight)

		const OrbitControls = require('three/examples/jsm/controls/OrbitControls').OrbitControls
		const orbitCtrl = new OrbitControls(camera, renderer.domElement)
		orbitCtrl.autoRotate = true
		orbitCtrl.target = target

		let aniFrame = 0
		let frame = 0
		const animate = () => {
			aniFrame = window.requestAnimationFrame(animate)
			frame = frame <= 100 ? frame + 1 : frame

			if (frame <= 100) {
				const easeOutCirc = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 4))
				const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

				camera.position.y = 10
				camera.position.x = initCamPos.x * Math.cos(rotSpeed) + initCamPos.z * Math.sin(rotSpeed)
				camera.position.z = initCamPos.z * Math.cos(rotSpeed) - initCamPos.x * Math.sin(rotSpeed)
				camera.lookAt(target)
			} else {
				orbitCtrl.update()
			}

			renderer.render(scene, camera)
		}

		new GLTFLoader().load(
			require('../assets/3d/dog.glb'),
			(gltf) => {
				const newScene = gltf.scene
				newScene.name = 'dog'
				newScene.position.y = 0
				newScene.position.x = 0
				newScene.receiveShadow = false
				newScene.castShadow = false
				scene.add(newScene)

				animate()
				setLoading(false)
			},
			undefined,
			(error) => {
				console.error(error)
			}
		)

		window.addEventListener('resize', setSize, false)

		return () => {
			window.cancelAnimationFrame(aniFrame)
			window.removeEventListener('resize', setSize, false)
			renderer.dispose()
		}
	}, [])

	return (
		<div className='w-full h-32 relative'>
			<div
				className='w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] absolute -top-[130px] left-1/2 -translate-x-1/2'
				ref={containerRef}>
				{loading && (
					<AiOutlineLoading3Quarters className='w-16 h-16 animate-spin mx-auto mt-[40%]' />
				)}
			</div>
		</div>
	)
}
export default VoxelDog
