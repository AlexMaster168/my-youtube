import React, { FC } from 'react'
import Image from 'next/image'
import Avatar from '@/images/main/avatar.jpg'
import Link from 'next/link'

import OpenMenu from '@/images/common/open-menu.svg'

const TopChannels: FC = () => {
	return (
		<div id='top_channels'>
			<div className='title_gray'>
				<h2>Top Channels</h2>
				<div className='showmore'>Show More</div>
			</div>

			<div className='list_channels'>
				<div className='channel'>
					<div className='info_left'>
						<Image src={Avatar} alt='avatar' width={37} height={37} />
						<div className='info'>
							<div className='name'>LEGO</div>
							<div className='subs'>6.2M Subscribers</div>
						</div>
					</div>
					<Link href='#' className='mnu'>
						<Image src={OpenMenu} alt='OpenMenu' />
					</Link>
				</div>

				<div className='channel'>
					<div className='info_left'>
						<Image src={Avatar} alt='avatar' width={37} height={37} />
						<div className='info'>
							<div className='name'>LEGO</div>
							<div className='subs'>6.2M Subscribers</div>
						</div>
					</div>
					<Link href='#' className='mnu'>
						<Image src={OpenMenu} alt='OpenMenu' />
					</Link>
				</div>

				<div className='channel'>
					<div className='info_left'>
						<Image src={Avatar} alt='avatar' width={37} height={37} />
						<div className='info'>
							<div className='name'>LEGO</div>
							<div className='subs'>6.2M Subscribers</div>
						</div>
					</div>
					<Link href='#' className='mnu'>
						<Image src={OpenMenu} alt='OpenMenu' />
					</Link>
				</div>

				<div className='channel'>
					<div className='info_left'>
						<Image src={Avatar} alt='avatar' width={37} height={37} />
						<div className='info'>
							<div className='name'>LEGO</div>
							<div className='subs'>6.2M Subscribers</div>
						</div>
					</div>
					<Link href='#' className='mnu'>
						<Image src={OpenMenu} alt='OpenMenu' />
					</Link>
				</div>

				<div className='channel'>
					<div className='info_left'>
						<Image src={Avatar} alt='avatar' width={37} height={37} />
						<div className='info'>
							<div className='name'>LEGO</div>
							<div className='subs'>6.2M Subscribers</div>
						</div>
					</div>
					<Link href='#' className='mnu'>
						<Image src={OpenMenu} alt='OpenMenu' />
					</Link>
				</div>

				<div className='channel'>
					<div className='info_left'>
						<Image src={Avatar} alt='avatar' width={37} height={37} />
						<div className='info'>
							<div className='name'>LEGO</div>
							<div className='subs'>6.2M Subscribers</div>
						</div>
					</div>
					<Link href='#' className='mnu'>
						<Image src={OpenMenu} alt='OpenMenu' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default TopChannels
