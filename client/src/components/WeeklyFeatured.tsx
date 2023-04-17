import React from 'react'
import Image from 'next/image'
import TopVideo from '@/components/TopVideo'

import Main from '@/images/main/1.jpg'
import Main2 from '@/images/main/2.jpg'
import Main3 from '@/images/main/3.jpg'

const WeeklyFeatured = () => {
	return (
		<div className='weekly_featured'>
			<div className='info_wf'>
				<div className='sub_name'>Weekly Featured</div>
				<h1>Hello, Summer Vacation!</h1>
				<div className='descr'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
					harum placeat ullam vel non, quisquam totam, doloremque expedita odit
					consectetur minima vitae. Facilis nostrum cumque illum fugit rem, nam
					consectetur!
				</div>
				<div className='slider_wf'>
					<div className='video_item'>
						<div className='thumbnail'>
							<Image src={Main} alt='Main' />
							<time>16:55</time>
						</div>
						<div className='author'>Micheal Adams</div>
						<div className='name'>Day in my life: Summer ...</div>
						<div className='number_info'>
							<div className='views'>VIEWS 28.6K</div>
							<div className='date'>6DS AGO</div>
						</div>
					</div>

					<div className='video_item'>
						<div className='thumbnail'>
							<Image src={Main2} alt='Main2' />
							<time>07:23</time>
						</div>
						<div className='author'>Dollie Cross</div>
						<div className='name'>Day in my life: Summer ...</div>
						<div className='number_info'>
							<div className='views'>VIEWS 26.7K</div>
							<div className='date'>10DS AGO</div>
						</div>
					</div>

					<div className='video_item'>
						<div className='thumbnail'>
							<Image src={Main3} alt='main3' />
							<time>16:55</time>
						</div>
						<div className='author'>Micheal Adams</div>
						<div className='name'>Day in my life: Summer ...</div>
						<div className='number_info'>
							<div className='views'>VIEWS 28.6K</div>
							<div className='date'>6DS AGO</div>
						</div>
					</div>
				</div>
			</div>

			<TopVideo />
		</div>
	)
}

export default WeeklyFeatured
