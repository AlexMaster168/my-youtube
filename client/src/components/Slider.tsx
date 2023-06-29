import React, { FC } from 'react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import VideoItem from '@/components/video/videoItem'
import { IVideoDto } from '@/services/types/video.interface'

const Slider: FC<{ videos: IVideoDto[] }> = ({ videos }) => {
	return (
		<Swiper
			modules={[Autoplay]}
			spaceBetween={15}
			slidesPerView={2}
			autoplay={{
				delay: 2500
			}}
			className='slider_wf'
		>
			{videos?.map(video => (
				<SwiperSlide key={video.video_id}>
					<VideoItem item={video} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Slider
