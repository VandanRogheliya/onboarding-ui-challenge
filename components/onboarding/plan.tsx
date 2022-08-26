import classNames from 'classnames'
import React, { useState } from 'react'
import { User, Users } from 'react-feather'
import Button from '../common/button'

type Props = {
	nextStep: () => void
}

const Plan = ({ nextStep }: Props) => {
	const [selectedOption, setSelectedOption] = useState<'' | 'solo' | 'team'>('')

	const handleCreateWorkspace = () => {
		if (selectedOption === '') {
			alert('Select an option')
			return
		}
		// API STUFF
		console.log({ selectedOption })
		// If API call successfull
		nextStep()
	}

	return (
		<div className="flex flex-col space-y-5 items-center">
			<h1 className="text-3xl font-bold">How are you planning to use Eden?</h1>
			<h2 className="text-gray-500">
				We&apos;ll streamline your setup experience accordingly.
			</h2>
			<div className="flex space-x-5 pt-5 w-96">
				<Card
					icon={
						<User
							fill={selectedOption === 'solo' ? 'purple' : 'black'}
							color={selectedOption === 'solo' ? 'purple' : undefined}
						/>
					}
					heading="For myself"
					subHeading="Write better. Think more clearly. Stay organized."
					isSelected={selectedOption === 'solo'}
					onClick={() => setSelectedOption('solo')}
				/>
				<Card
					icon={
						<Users
							fill={selectedOption === 'team' ? 'purple' : 'black'}
							color={selectedOption === 'team' ? 'purple' : undefined}
						/>
					}
					heading="With my team"
					subHeading="Wikis, docs, tasks & projects, all in one place."
					isSelected={selectedOption === 'team'}
					onClick={() => setSelectedOption('team')}
				/>
			</div>
			<Button onClick={handleCreateWorkspace}>Create Workspace</Button>
		</div>
	)
}

type CardProps = {
	icon: JSX.Element
	heading: string
	subHeading: string
	isSelected: boolean
	onClick: () => void
}

const Card = ({
	heading,
	icon,
	subHeading,
	isSelected,
	onClick,
}: CardProps) => (
	<button
		className={classNames(
			'flex flex-col text-left space-y-4 border rounded-md h-full p-5',
			{
				'border-purple-700': isSelected,
			}
		)}
		onClick={onClick}
	>
		<div>{icon}</div>
		<p className="text-lg font-bold">{heading}</p>
		<p className="text-gray-500">{subHeading}</p>
	</button>
)

export default Plan
