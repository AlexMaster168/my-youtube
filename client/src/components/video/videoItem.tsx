import React, { FC } from 'react'
import Image from 'next/image'
import { IVideo } from '@/services/types/video.interface'
import { formatNumberToK } from '../../../utils/Utils'

const VideoItem:FC<{item: IVideo}> = ({item}) => {
	return (
		<div className='video_item'>
			<div className='thumbnail'>
				<Image src={item.thumbnailPath} alt={item.name} height={91} width={163} />
				<time>{item.createdAt}</time>
			</div>
			<div className='author'>{item.user?.name}</div>
			<div className='name'>{item.name}</div>
			<div className='number_info'>
				<div className='views'>VIEWS {formatNumberToK(item.views)}</div>
				<div className='date'>{item.createdAt}</div>
			</div>
		</div>
	)
}

export default VideoItem
