import React, { FC } from 'react'
import Image from 'next/image'

import Live from '@/images/main/live.jpg'
import Avatar from '@/images/main/avatar.jpg'

const Lives: FC = () => {
	return (
		<div id='live'>
			<div className='title_gray'>
				<h2>Live</h2>
				<div className='showmore'>Show More</div>
			</div>

			<div className='video_item video_live_item'>
				<div className='thumbnail'>
					<Image src={Live} alt='Live' />
					<div className='live'>Live</div>
					<div className='avatar'>
						<Image src={Avatar} alt='avatar' width={37} height={37} />
					</div>
				</div>
				<div className='author'>Warren Munoz</div>
				<div className='name'>Lake House Vacation! Boating, Tubing & More!</div>
				<div className='descr'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ipsa
					voluptate, natus. Iure vitae dolores suscipit, commodi debitis aut
					culpa sapiente architecto exercitationem. Ullam laudantium ea hic
					inventore. Rem, alias.
				</div>
				<div className='number_info'>
					<div className='views'>VIEWS 29.2K</div>
					<div className='comments'>COMMENTS 5.8K</div>
				</div>
			</div>
		</div>
	)
}

export default Lives
