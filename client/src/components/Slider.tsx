import Image from 'next/image'
import React, { FC } from 'react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import Main from '@/images/main/1.jpg'
import Main2 from '@/images/main/2.jpg'
import Main3 from '@/images/main/3.jpg'

const Slider: FC = () => {
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
			<SwiperSlide className='video_item'>
				<div className='thumbnail'>
					<Image src={Main} alt='Main' />
					<time>16:55</time>
				</div>
				<div className='author'>Micheal Adams</div>
				<div className='name'>Day in my life: Summer ...</div>
				<div className='number_info'>
					<div className='views'>VIEWS 28.6K</div>
					<div className='date'>6DS AGO</div>
				</div>
			</SwiperSlide>

			<SwiperSlide className='video_item'>
				<div className='thumbnail'>
					<Image src={Main2} alt='Main2' />
					<time>07:23</time>
				</div>
				<div className='author'>Dollie Cross</div>
				<div className='name'>Day in my life: Summer ...</div>
				<div className='number_info'>
					<div className='views'>VIEWS 26.7K</div>
					<div className='date'>10DS AGO</div>
				</div>
			</SwiperSlide>

			<SwiperSlide className='video_item'>
				<div className='thumbnail'>
					<Image src={Main3} alt='main3' />
					<time>16:55</time>
				</div>
				<div className='author'>Micheal Adams</div>
				<div className='name'>Day in my life: Summer ...</div>
				<div className='number_info'>
					<div className='views'>VIEWS 28.6K</div>
					<div className='date'>6DS AGO</div>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default Slider
