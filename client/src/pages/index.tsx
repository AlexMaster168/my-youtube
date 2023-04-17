import { NextPage } from 'next'
import React from 'react'
import WeeklyFeatured from '@/components/WeeklyFeatured'
import Line from '@/components/ui/Line'
import Recommended from '@/components/Recommended'
import RightSide from '@/components/layout/RightSide/RightSide'
import Layout from '@/components/layout/Layout'

const HomePage: NextPage = () => {
	return (
		<Layout title='Youtube Home'>
			<div id='wrapper_content'>
				<div className='left_side'>
					<WeeklyFeatured />
					<Line />
					<Recommended />
				</div>
				<RightSide />
			</div>
		</Layout>
	)
}

export default HomePage
