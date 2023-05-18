import { IMenuItem } from '@/components/layout/Sidebar/Menu/menu.interface'
import Gift from '@/images/common/gift.svg'
import Multimedia from '@/images/common/multimedia.svg'
import VideoCamera from '@/images/common/video-camera.svg'
import LiveNews from '@/images/common/live-news.svg'
import Calendar from '@/images/common/calendar.svg'
import SmartPhone from '@/images/common/smartphone.svg'
import Like from '@/images/common/like.svg'
import Time from '@/images/common/time.svg'
import Adjust from '@/images/common/adjust.svg'
import Support from '@/images/common/support.svg'

export const menu: IMenuItem[] = [{
	title: 'Videos',
	image: Multimedia,
	link: '/videos'
}, {
	title: 'Movies & Shows',
	image: VideoCamera,
	link: '/'
}, {
		title: 'Premium Contents',
		image: Gift,
		link: '/'
	},
	{
		title: 'Live',
		image: LiveNews,
		link: '/'
	},
	{
		title: 'Subscribtions',
		image: Calendar,
		link: '/'
	},
	{
		title: 'Library',
		image: SmartPhone,
		link: '/'
	},
	{
		title: 'Liked Videos',
		image: Like,
		link: '/'
	},
	{
		title: 'Watch Later',
		image: Time,
		link: '/'
	},
	{
		title: 'Settings',
		image: Adjust,
		link: '/'
	},
	{
		title: 'Help & Report',
		image: Support,
		link: '/'
	}]
