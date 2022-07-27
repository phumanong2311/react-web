import React from 'react'
import { NavBar } from './NavBar'

const LayoutWrapper = ({ children }) => {
	return (
		<div className='container mx-auto'>
			<NavBar />
			<main className=''>{children}</main>
		</div>
	)
}

export default LayoutWrapper
