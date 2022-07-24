import React from 'react'
import LayoutHeader from './LayoutHeader'

const LayoutWrapper = ({ children }) => {
	return (
		<div className='min-vh-100 d-flex flex-column'>
			<LayoutHeader />
			<main className='flex-grow-1 d-flex'>{children}</main>
		</div>
	)
}

export default LayoutWrapper
