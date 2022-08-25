import classNames from 'classnames'
import React from 'react'

type Props = {
	prefix?: string
	label?: string
} & React.HTMLProps<HTMLInputElement>

const Input = ({ prefix, label, ...props }: Props) => {
	return (
		<div className="flex flex-col w-full space-y-1">
			{label && (
				<label className="text-gray-600">
					{label}{' '}
					{!props.required && (
						<span className="text-sm text-gray-400">(optional)</span>
					)}
				</label>
			)}
			<div className="flex w-full">
				{prefix && (
					<p className="border px-3 py-2 rounded-md rounded-r-none bg-gray-100 text-gray-600">
						{prefix}
					</p>
				)}
				<input
					{...props}
					className={classNames('w-full border px-3 py-2 rounded-md', {
						'rounded-l-none': prefix,
					})}
				/>
			</div>
		</div>
	)
}

export default Input
