import React from 'react'

type Props = {
	children: JSX.Element | JSX.Element[] | string
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

const Button = ({ children, ...props }: Props) => {
	return (
		<button
			{...props}
			className="bg-purple-700 text-white py-3 w-96 rounded-md hover:opacity-75 active:opacity-90"
		>
			{children}
		</button>
	)
}

export default Button
