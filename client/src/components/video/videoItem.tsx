import React, { FC} from 'react'
import { IVideoDto } from '@/services/types/video.interface'
import { formatNumberToK } from '../../../utils/Utils'
import DurationVideo from '@/components/ui/durationVideo'

const VideoItem: FC<{ item: IVideoDto }> = ({ item }) => {
	return (
		<div className='video_item'>
			<div className='thumbnail'>
				<img src={item.video_thumbnailPath} alt={item.video_name} height={91} width={163} />
				<DurationVideo item={item}/>
			</div>
			<div className='author'>{item.user_name}</div>
			<div className='name'>{item.video_name}</div>
			<div className='number_info'>
				<div className='views'>VIEWS {formatNumberToK(item.video_views)}</div>
				<div className='date'>{item.video_createdAt}</div>
			</div>
		</div>
	)
}

export default VideoItem
