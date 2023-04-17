import React, { FC } from 'react'
import Image from 'next/image'

import Main3 from '@/images/main/3.jpg'
import Avatar from '@/images/main/avatar.jpg'

const TopVideo: FC = () => {
	return (
		<div className='top_video'>
			<div className='video_item'>
				<div className='thumbnail'>
					<Image src={Main3} alt='Main3' />
					<time>28:32</time>
					<div className='avatar'>
						<Image src={Avatar} alt='avatar' width={37} height={37} />
					</div>
				</div>
				<div className='author'>Warren Munoz</div>
				<div className='name'>Lake House Vacation! Boating, Tubing & More!</div>
				<div className='descr'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus animi
					aut vel alias voluptate, odio. Tempora sequi et itaque enim a, aut
					excepturi adipisci quam, aspernatur, eaque obcaecati dolor tenetur :)
				</div>
				<div className='number_info'>
					<div className='views'>VIEWS 29.2K</div>
					<div className='likes'>LIKES 1.6K</div>
					<div className='date'>3DS AGO</div>
				</div>
			</div>
		</div>
	)
}

export default TopVideo
