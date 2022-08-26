import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Done from '../components/onboarding/done'
import Plan from '../components/onboarding/plan'
import Steps from '../components/onboarding/steps'
import Welcome from '../components/onboarding/welcome'
import Workspace from '../components/onboarding/workspace'
import { STEP_ENUM } from '../lib/constants'

const TOTAL_STEPS = 4

const Home: NextPage = () => {
	const [activeStep, setActiveStep] = useState(STEP_ENUM.welcome)

	useEffect(() => {
		console.log(activeStep)
	}, [activeStep])

	return (
		<div className="flex justify-center">
			<div className="flex flex-col items-center max-w-4xl px-5 py-10 h-screen space-y-10">
				<Image src="/logo.png" height={25} width={80} alt="Eden logo" />
				<Steps totalSteps={TOTAL_STEPS} activeStep={activeStep} />

				{activeStep === STEP_ENUM.welcome && (
					<Welcome nextStep={() => setActiveStep(STEP_ENUM.workspace)} />
				)}
				{activeStep === STEP_ENUM.workspace && (
					<Workspace nextStep={() => setActiveStep(STEP_ENUM.plan)} />
				)}

				{activeStep === STEP_ENUM.plan && (
					<Plan nextStep={() => setActiveStep(STEP_ENUM.done)} />
				)}

				{activeStep === STEP_ENUM.done && <Done />}
			</div>
		</div>
	)
}

export default Home
