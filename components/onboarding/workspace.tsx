import React, { useState } from 'react'
import Button from '../common/button'
import Input from '../common/input'

type Props = {
	nextStep: () => void
}

const Workspace = ({ nextStep }: Props) => {
	const [workspaceName, setWorkspaceName] = useState('')
	const [workspaceUrl, setWorkspaceUrl] = useState('')

	const handleCreateWorkspace = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// API STUFF
		console.log({ workspaceName, workspaceUrl })
		// If API call successfull
		nextStep()
	}

	return (
		<form
			onSubmit={handleCreateWorkspace}
			className="flex flex-col space-y-5 items-center"
		>
			<h1 className="text-3xl font-bold">
				Let&apos;s set up a home for all your work
			</h1>
			<h2 className="text-gray-500">
				You can always create another workspace later.
			</h2>
			<div className="flex flex-col pt-5 space-y-3 w-96">
				<Input
					label="Workspace Name"
					placeholder="Eden"
					value={workspaceName}
					onChange={(event) => setWorkspaceName(event.currentTarget.value)}
					required
				/>
				<Input
					label="Workspace URL"
					placeholder="Example"
					value={workspaceUrl}
					prefix={'www.eden/'}
					onChange={(event) => setWorkspaceUrl(event.currentTarget.value)}
				/>
			</div>
			<Button>Next</Button>
		</form>
	)
}

export default Workspace
