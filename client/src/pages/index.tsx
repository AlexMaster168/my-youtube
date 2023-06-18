import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import WeeklyFeatured from '@/components/WeeklyFeatured'
import Line from '@/components/ui/Line'
import Recommended from '@/components/Recommended'
import RightSide from '@/components/layout/RightSide/RightSide'
import Layout from '@/components/layout/Layout'
import VideoService from '@/services/video.service'
import { IVideo, IVideoDto } from '@/services/types/video.interface'
import { IUser } from '@/services/types/user.interface'
import { shuffle } from 'lodash'

interface IHome {
	newVideos: IVideo[],
	weeklyVideos: IVideoDto[],
	randomVideo: IVideoDto,
	topVideo: IVideoDto,
	topChannels: IUser[]
}

const HomePage: NextPage<IHome> = (item) => {
	return (
		<Layout title='UaTube Home'>
			<div id='wrapper_content'>
				<div className='left_side'>
					<WeeklyFeatured weeklyVideos={item.weeklyVideos} randomVideo={item.randomVideo} />
					<Line />
					<Recommended />
				</div>
				<RightSide />
			</div>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: newVideos } = await VideoService.getAll()
		const randomVideo = {}
		const topVideo = {}
		const topChannels = {}

		return {
			props: {
				newVideos,
				weeklyVideos: shuffle(newVideos),
				randomVideo,
				topVideo,
				topChannels
			},
			revalidate: 60
		}
	} catch (e) {
		return {
			props: {
				newVideos: [],
				weeklyVideos: [],
				randomVideo: {},
				topVideo: {},
				topChannels: {}
			}
		}
	}
}

export default HomePage
