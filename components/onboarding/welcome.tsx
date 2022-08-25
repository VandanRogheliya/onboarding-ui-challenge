import React, { useState } from 'react'
import Button from '../common/button'
import Input from '../common/input'

type Props = {
	nextStep: () => void
}

const Welcome = ({ nextStep }: Props) => {
	const [fullName, setFullName] = useState('')
	const [displayName, setDisplayName] = useState('')

	const handleCreateWorkspace = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// API STUFF
		console.log({ fullName, displayName })
		// If API call successfull
		nextStep()
	}

	return (
		<form
			onSubmit={handleCreateWorkspace}
			className="flex flex-col space-y-5 items-center"
		>
			<h1 className="text-3xl font-bold">Welcome! First things first...</h1>
			<h2 className="text-gray-500">You can always change them later.</h2>
			<div className="flex flex-col pt-5 space-y-3 w-96">
				<Input
					label="Full Name"
					placeholder="Steve Jobs"
					value={fullName}
					onChange={(event) => setFullName(event.currentTarget.value)}
					required
				/>
				<Input
					label="Display Name"
					placeholder="Steve"
					value={displayName}
					onChange={(event) => setDisplayName(event.currentTarget.value)}
					required
				/>
			</div>
			<Button type="submit">Next</Button>
		</form>
	)
}

export default Welcome
