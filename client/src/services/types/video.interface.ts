import { IUser } from '@/services/types/user.interface'

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

export interface IVideoDto extends Pick<IVideo, 'thumbnailPath' | 'name' | 'description' | 'videoPath' | 'isPublic'> {
}
