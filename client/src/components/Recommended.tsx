import React, { FC } from 'react'
import Image from 'next/image'

import Main4 from '@/images/main/4.jpg'
import Avatar from '@/images/main/avatar.jpg'
import Main5 from '@/images/main/5.jpg'
import Main6 from '@/images/main/6.jpg'
import Main13 from '@/images/main/13.jpg'
import Main8 from '@/images/main/8.jpg'
import Main9 from '@/images/main/9.jpg'
import Main2 from '@/images/main/2.jpg'
import Main11 from '@/images/main/11.jpg'
import Main12 from '@/images/main/12.jpg'
import Main14 from '@/images/main/14.jpg'

const Recommended: FC = () => {
	return (
		<div id='recommended'>
			<div className='top_block'>
				<div className='left_title title_gray'>
					<h2>Recommended</h2>
					<div className='showmore'>Show More</div>
				</div>
				<div className='sort'>By View Trending</div>
			</div>

			<div className='catalog'>
				<div className='video_item'>
					<div className='thumbnail'>
						<Image src={Main4} alt='Main4' />
						<time>28:32</time>
						<div className='avatar'>
							<Image src={Avatar} alt='avatar' width={37} height={37} />
						</div>
					</div>
					<div className='author'>Warren Munoz</div>
					<div className='name'>
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className='number_info'>
						<div className='views'>VIEWS 29.2K</div>
						<div className='date'>3DS AGO</div>
					</div>
				</div>

				<div className='video_item'>
					<div className='thumbnail'>
						<Image src={Main5} alt='Main5' />
						<time>28:32</time>
						<div className='avatar'>
							<Image src={Avatar} alt='avatar' width={37} height={37} />
						</div>
					</div>
					<div className='author'>Warren Munoz</div>
					<div className='name'>
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className='number_info'>
						<div className='views'>VIEWS 29.2K</div>
						<div className='date'>3DS AGO</div>
					</div>
				</div>

				<div className='video_item'>
					<div className='thumbnail'>
						<Image src={Main6} alt='Main6' />
						<time>28:32</time>
						<div className='avatar'>
							<Image src={Avatar} alt='avatar' width={37} height={37} />
						</div>
					</div>
					<div className='author'>Warren Munoz</div>
					<div className='name'>
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className='number_info'>
						<div className='views'>VIEWS 29.2K</div>
						<div className='date'>3DS AGO</div>
					</div>
				</div>

				<div className='video_item'>
					<div className='thumbnail'>
						<Image src={Main13} alt='Main13' />
						<time>28:32</time>
						<div className='avatar'>
							<Image src={Avatar} alt='avatar' width={37} height={37} />
						</div>
					</div>
					<div className='author'>Warren Munoz</div>
					<div className='name'>
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className='number_info'>
						<div className='views'>VIEWS 29.2K</div>
						<div className='date'>3DS AGO</div>
					</div>
				</div>

				<div className='video_item'>
					<div className='thumbnail'>
						<Image src={Main8} alt='Main8' />
						<time>28:32</time>
						<div className='avatar'>
							<Image src={Avatar} alt='avatar' width={37} height={37} />
						</div>
					</div>
					<div className='author'>Warren Munoz</div>
					<div className='name'>
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className='number_info'>
						<div className='views'>VIEWS 29.2K</div>
						<div className='date'>3DS AGO</div>
					</div>
				</div>

				<div className='video_item'>
					<div className='thumbnail'>
						<Image src={Main9} alt='Main9' />
						<time>28:32</time>
						<div className='avatar'>
							<Image src={Avatar} alt='avatar' width={37} height={37} />
						</div>
					</div>
					<div className='author'>Warren Munoz</div>
					<div className='name'>
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className='number_info'>
						<div className='views'>VIEWS 29.2K</div>
						<div className='date'>3DS AGO</div>
					</div>
				</div>

				<div className='video_item'>
					<div className='thumbnail'>
						<Image src={Main2} alt='Main2' />
						<time>28:32</time>
						<div className='avatar'>
							<Image src={Avatar} alt='avatar' width={37} height={37} />
						</div>
					</div>
					<div className='author'>Warren Munoz</div>
					<div className='name'>
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className='number_info'>
						<div className='views'>VIEWS 29.2K</div>
						<div className='date'>3DS AGO</div>
					</div>
				</div>

				<div className='video_item'>
					<div className='thumbnail'>
						<Image src={Main11} alt='Main11' />
						<time>28:32</time>
						<div className='avatar'>
							<Image src={Avatar} alt='avatar' width={37} height={37} />
						</div>
					</div>
					<div className='author'>Warren Munoz</div>
					<div className='name'>
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className='number_info'>
						<div className='views'>VIEWS 29.2K</div>
						<div className='date'>3DS AGO</div>
					</div>
				</div>

				<div className='video_item video_big_item'>
					<Image src={Main12} alt='Main12' className='img-responsive' />
				</div>

				<div className='video_item'>
					<div className='thumbnail'>
						<Image src={Main13} alt='Main13' />
						<time>28:32</time>
						<div className='avatar'>
							<Image src={Avatar} alt='avatar' width={37} height={37} />
						</div>
					</div>
					<div className='author'>Warren Munoz</div>
					<div className='name'>
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className='number_info'>
						<div className='views'>VIEWS 29.2K</div>
						<div className='date'>3DS AGO</div>
					</div>
				</div>

				<div className='video_item'>
					<div className='thumbnail'>
						<Image src={Main14} alt='Main14' />
						<time>28:32</time>
						<div className='avatar'>
							<Image src={Avatar} alt='avatar' width={37} height={37} />
						</div>
					</div>
					<div className='author'>Warren Munoz</div>
					<div className='name'>
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className='number_info'>
						<div className='views'>VIEWS 29.2K</div>
						<div className='date'>3DS AGO</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Recommended
