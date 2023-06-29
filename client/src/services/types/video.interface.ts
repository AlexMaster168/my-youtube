import {IUser} from '@/services/types/user.interface'

export interface IVideo {
    id: number,
    name: string,
    description: string,
    videoPath: string,
    views: number,
    likes: number,
    user?: IUser,
    isPublic?: boolean
    thumbnailPath: string,
    createdAt: string,
    updatedAt: string,
}

export interface IVideoDto {
    video_id: number,
    video_likes: number,
    video_videoPath: string,
    video_description: string,
    video_isPublic?: boolean,
    user_name: string,
    user_avatarPath: string,
    video_name: string,
    video_views: number,
    video_thumbnailPath: string,
    video_createdAt: string,
    video_updatedAt: string,
}
