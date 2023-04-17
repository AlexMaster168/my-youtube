import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/images/common/logo.png'
import Avatar from '@/images/main/avatar.jpg'
import Multimedia from '@/images/common/multimedia.svg'
import VideoCamera from '@/images/common/video-camera.svg'
import Gifts from '@/images/common/gift.svg'
import LiveNews from '@/images/common/live-news.svg'
import Calendar from '@/images/common/calendar.svg'
import SmartPhone from '@/images/common/smartphone.svg'
import Like from '@/images/common/like.svg'
import Time from '@/images/common/time.svg'
import Adjust from '@/images/common/adjust.svg'
import Support from '@/images/common/support.svg'

const Sidebar: FC = () => {
	return (
		<section className='sidebar'>
			<Link href='/' className='logo'>
				<Image src={Logo} alt='Youtube' width={130} height={42} />
			</Link>
			<div className='profile_info'>
				<Image src={Avatar} alt='Avatar' width={70} height={70} />
				<div className='name'>Nannie Nelson</div>
				<div className='location'>Montreal, QC</div>
			</div>
			<div className='information'>
				<div className='item'>
					<div className='top'>278</div>
					<div className='bottom'>videos</div>
				</div>
				<div className='item'>
					<div className='top'>36.5k</div>
					<div className='bottom'>subscribers</div>
				</div>
			</div>
			<div className='line'></div>
			<ul className='mnu_sidebar'>
				<li>
					<Link href='#'>
						<Image src={Multimedia} alt='Multimed' width={20} height={20} />
						<b>Videos</b>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<Image src={VideoCamera} alt='VideoCamera' width={20} height={20} />
						<b>Movies & Shows</b>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<Image src={Gifts} alt='Gifts' width={20} height={20} />
						<b>Premium Contents</b>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<Image src={LiveNews} alt='Live_News' width={20} height={20} />
						<b>Live</b>
					</Link>
				</li>

				<div className='line_mnu'></div>

				<li>
					<Link href='#'>
						<Image src={Calendar} alt='Calendar' width={20} height={20} />
						<b>Subscribtions</b>
						<span className='number'>29 new</span>
					</Link>
				</li>
				<li>
					<a href='#'>
						<Image src={SmartPhone} alt='SmartPhone' width={20} height={20} />
						<b>Library</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<Image src={Like} alt='Like' width={20} height={20} />
						<b>Liked Videos</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<Image src={Time} alt='Time' width={20} height={20} />
						<b>Watch Later</b>
					</a>
				</li>

				<div className='line_mnu'></div>

				<li>
					<a href='#'>
						<Image src={Adjust} alt='Adjust' width={20} height={20} />
						<b>Settings</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<Image src={Support} alt='Support' width={20} height={20} />
						<b>Help & Report</b>
					</a>
				</li>
			</ul>

			<div className='switch_wrapper'>
				<label className='switch'>
					<input type='checkbox' checked />
					<span className='slider round'></span>
				</label>
				<p>Light On</p>
			</div>

			<Link href='#' id='logout_btn'>
				Logout
			</Link>
			<div className='copy'>© 2023 Youtube</div>
		</section>
	)
}

export default Sidebar