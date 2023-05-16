import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { defaultValue } from '@/providers/AuthProvider'
import { AuthService } from '@/services/auth/auth.service'
import Adjust from '@/images/common/adjust.svg'
import Calendar from '@/images/common/calendar.svg'
import Gifts from '@/images/common/gift.svg'
import Like from '@/images/common/like.svg'
import LiveNews from '@/images/common/live-news.svg'
import Logo from '@/images/common/logo.png'
import Multimedia from '@/images/common/multimedia.svg'
import SmartPhone from '@/images/common/smartphone.svg'
import Support from '@/images/common/support.svg'
import Time from '@/images/common/time.svg'
import VideoCamera from '@/images/common/video-camera.svg'
import { useAuth } from '@/hooks/useAuth'
import Line from '@/components/ui/Line'
import ProfileInfo from '@/components/layout/Sidebar/ProfileInfo'

const Sidebar: () => JSX.Element | string = () => {
	const { user, setData } = useAuth()

	const handleLogout = () => {
		AuthService.logout()
		if (setData) setData(defaultValue)
	}

	return user ? (
		<section className='sidebar'>
			<Link href='/' className='logo'>
				<Image src={Logo} alt='Youtube' width={130} height={42} />
			</Link>
      <ProfileInfo/>
			<Line/>
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
					<input type='checkbox' defaultChecked />
					<span className='slider round'></span>
				</label>
				<p>Light On</p>
			</div>

			<button id='logout_btn' onClick={() => handleLogout()}>
				Logout
			</button>
			<div className='copy'>© 2023 Youtube</div>
		</section>
	) : (
		''
	)
}

export default Sidebar
