import { useRef, useEffect, useState, FC } from 'react'
import { IVideoDto } from '@/services/types/video.interface'

const DurationVideo: FC<{ item: IVideoDto }> = ({ item }) => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [videoDuration, setVideoDuration] = useState<number | undefined>(undefined)

	useEffect(() => {
		const videoElement = videoRef.current

		if (videoElement) {
			videoElement.addEventListener('loadeddata', handleLoadedData)
		}

		return () => {
			if (videoElement) {
				videoElement.removeEventListener('loadeddata', handleLoadedData)
			}
		}
	}, [])

	const handleLoadedData = () => {
		if (videoRef.current) {
			setVideoDuration(videoRef.current.duration)
		}
	}

	return (
		<div>
			<video className='hidden' ref={videoRef} controls>
				<source src={item.video_videoPath} />
			</video>
			<time>{videoDuration}</time>
		</div>
	)
}

export default DurationVideo
