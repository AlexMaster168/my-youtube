import React, { FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import Header from '@/components/layout/Header/Header'
import Head from 'next/head'
import { useAuth } from '@/hooks/useAuth'

interface LayoutProps {
	title: string
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, title }) => {
	const { user } = useAuth()

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main id='youtube_main'>
				<Sidebar />
				<section
					className={cn('content', {
						'content-full': !user
					})}
				>
					<Header />
					<div className='content-wrapper'>{children}</div>
				</section>
			</main>
		</>
	)
}

export default Layout
