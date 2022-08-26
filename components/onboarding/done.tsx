import React from 'react'
import { Check, CheckCircle } from 'react-feather'
import Button from '../common/button'

const Done = () => {
	return (
		<div className="flex flex-col space-y-5 items-center">
			<Check
				color="white"
				className="bg-purple-700 rounded-full w-16 h-16 p-5 mt-10"
			/>
			<h1 className="text-3xl font-bold">Congratulations, Eren!</h1>
			<h2 className="text-gray-500">
				You have completed onboarding, you can start using Eden!
			</h2>
			<a
				href="https://github.com/VandanRogheliya"
				target="_blank"
				rel="noreferrer"
			>
				<Button>Launch Eden</Button>
			</a>
		</div>
	)
}

export default Done
