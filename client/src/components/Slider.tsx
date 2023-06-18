import React, { FC } from 'react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import VideoItem from '@/components/video/videoItem'
import { IVideoDto } from '@/services/types/video.interface'

const Slider: FC<{ videos: IVideoDto[] }> = ({ videos }) => {
	return (
		<Swiper
			modules={[Autoplay, Navigation]}
			spaceBetween={7}
			slidesPerView={2}
			navigation={true}
			autoplay={{
				delay: 4500
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
