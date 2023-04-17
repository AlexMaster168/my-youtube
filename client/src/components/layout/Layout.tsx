import React, { FC, PropsWithChildren } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import Head from 'next/head'

interface LayoutProps {
	title: string
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main id='youtube_main'>
				<Sidebar />
				<section className='content'>
					<Header />
					<div className='content-wrapper'>{children}</div>
				</section>
			</main>
		</>
	)
}

export default Layout
