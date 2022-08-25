import classNames from 'classnames'
import React from 'react'

type Props = {
	totalSteps: number
	activeStep: number
}

const Steps = ({ activeStep, totalSteps }: Props) => {
	return (
		<div className="flex">
			{Array(totalSteps)
				.fill(0)
				.map((_, index) => (
					<Step
						key={index}
						isActive={activeStep - 1 >= index}
						isFirst={index === 0}
						isLast={index === totalSteps - 1}
						stepNumber={index + 1}
					/>
				))}
		</div>
	)
}

type StepProps = {
	stepNumber: number
	isFirst: boolean
	isLast: boolean
	isActive: boolean
}

const Step = ({ stepNumber, isFirst, isLast, isActive }: StepProps) => (
	<div className="flex items-center justify-center">
		{!isFirst && (
			<div
				className={classNames('border w-6', { 'border-purple-700': isActive })}
			/>
		)}
		<p
			className={classNames(
				'border text-sm rounded-full w-10 h-10 flex items-center justify-center',
				{
					'bg-purple-700 border-purple-700 text-white': isActive,
					'text-gray-500': !isActive,
				}
			)}
		>
			{stepNumber}
		</p>
		{!isLast && (
			<div
				className={classNames('border w-6', { 'border-purple-700': isActive })}
			/>
		)}
	</div>
)

export default Steps
