import React, { FC } from 'react'
import Slider from '@/components/Slider'
import { IVideoDto } from '@/services/types/video.interface'
import VideoItem from "@/components/video/videoItem";

interface IWeeklyFeatured {
	weeklyVideos: IVideoDto[]
	randomVideo: IVideoDto
}

const WeeklyFeatured: FC<IWeeklyFeatured> = ({ weeklyVideos, randomVideo }) => {
	return (
		<div className='weekly_featured'>
			<div className='info_wf'>
				<div className='sub_name'>Недільні рекомендації</div>
				<h1>Вітаю, Літній Відпочинок!</h1>
				<div className='descr'>
					Це підборка недільних рекомендацій, які може прийдуть вам до вподоби
				</div>
				<Slider videos={weeklyVideos} />
			</div>
			<div className='top_video'>
				<VideoItem item={randomVideo} isBig={true}/>
			</div>
		</div>
	)
}

export default WeeklyFeatured
