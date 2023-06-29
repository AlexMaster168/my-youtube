import {FC, useEffect, useRef, useState} from 'react';
import cls from '@/components/video/videoItem.module.scss'

interface VideoProps {
    src: string;
}

const VideoPlayer: FC<VideoProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoDuration, setVideoDuration] = useState<number>(0);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            videoElement.addEventListener('loadedmetadata', () => {
                setVideoDuration(videoElement.duration);
            });
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('loadedmetadata', () => {
                    setVideoDuration(videoElement.duration);
                });
            }
        };
    }, []);

    return (
        <div className={cls.time}>
            <video className='hidden' ref={videoRef} src={src} controls />
            {/*<time>Video duration: {videoDuration} seconds</time>*/}
        </div>
    );
};

export default VideoPlayer;
