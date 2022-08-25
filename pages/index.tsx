import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Steps from '../components/onboarding/steps'
import Welcome from '../components/onboarding/welcome'
import Workspace from '../components/onboarding/workspace'
import { STEP_ENUM } from '../lib/constants'

const TOTAL_STEPS = 4

const Home: NextPage = () => {
	const [activeStep, setActiveStep] = useState(STEP_ENUM.welcome)

	// const router = useRouter()

	// useEffect(() => {
	// 	if (!router.isReady) return
	// 	const step = router.query.step as string
	// 	if (!step) router.push('/', { query: { step: 'welcome' } })
	// 	else if (activeStep !== STEP_ENUM[step]) setActiveStep(STEP_ENUM[step])
	// }, [router.isReady])

	// useEffect(() => {
	//   if (!router.isReady) return
	// 	const step = router.query.step as string
	//   console.log(router.query, activeStep)
	// 	if (!step) return
	// 	if (STEP_ENUM[step] !== activeStep) {
	// 		router.push('/', {
	// 			query: {
	// 				step: Object.entries(STEP_ENUM).find(
	// 					([_, value]) => value === activeStep
	// 				)![0],
	// 			},
	// 		})
	// 	}
	// }, [activeStep, router.isReady, router])

	useEffect(() => {
		console.log(activeStep)
	}, [activeStep])

	return (
		<div className="flex justify-center">
			<div className="flex flex-col items-center max-w-4xl px-5 h-screen space-y-10">
				<Image src="/logo.png" height={25} width={80} alt="Eden logo" />
				<Steps totalSteps={TOTAL_STEPS} activeStep={activeStep} />

				{activeStep === STEP_ENUM.welcome && (
					<Welcome nextStep={() => setActiveStep(STEP_ENUM.workspace)} />
				)}
				{activeStep === STEP_ENUM.workspace && (
					<Workspace nextStep={() => setActiveStep(STEP_ENUM.plan)} />
				)}

				<button onClick={() => setActiveStep((prev) => prev + 1)}>+</button>
				<button onClick={() => setActiveStep((prev) => prev - 1)}>-</button>
			</div>
		</div>
	)
}

export default Home
