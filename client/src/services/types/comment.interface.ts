import { IUser } from '@/services/types/user.interface'

export interface IComment {
	id: number,
	user : IUser,
	video: string,
	message: string,
	createdAt: string,
	updatedAt: string,
}

export interface ICommentDto extends Pick<IComment, 'message'> {
  videoId: string
}
