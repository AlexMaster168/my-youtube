import React, {FC} from 'react'
import Link from "next/link";
import {formatNumberToK} from '../../../utils/Utils'
import DurationVideo from '@/components/ui/durationVideo'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)
import cls from "./videoItem.module.scss"
import {IVideoItem} from "@/components/video/video-item.interface";

const VideoItem: FC<IVideoItem> = ({item, isBig = false, isAvatar = true }) => {
    return (
        <Link href={`/v/${item.video_id}`}>
            <div className={cls.video_item}>
                <div className={cls.thumbnail}>
                    <img style={{width: '100%'}} src={item.video_thumbnailPath} alt={item.video_name}/>
                    <DurationVideo src={item.video_videoPath}/>
                    {isAvatar && (
                        <div className={cls.avatar}>
                            <img src={item.user_avatarPath || ''} alt={item.user_name}/>
                        </div>
                    )}
                </div>
                <div className={cls.author}>{item.user_name}</div>
                <div className={cls.name}>{item.video_name}</div>
                {isBig &&
                    (<div className={cls.description}>
                            {item.video_description}
                        </div>
                    )}
                <div className={cls.number_info}>
                    <div className={cls.views}>VIEWS {formatNumberToK(item.video_views)}</div>
                    {isBig &&
                        (<div className={cls.likes}>
                                LIKES {formatNumberToK(item.video_likes)}
                            </div>
                        )}
                    <div className={cls.date}>{dayjs(item.video_createdAt).fromNow()}</div>
                </div>
            </div>
        </Link>
    )
}

export default VideoItem
