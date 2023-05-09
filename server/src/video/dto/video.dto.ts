import { IsString, IsUUID, MinLength } from 'class-validator'

export class VideoDto {
	@MinLength(3, {
		message: 'Name cannot be less than 3 characters!'
	})
	@IsString()
	name: string

	isPublic?: boolean

	@MinLength(15, {
		message: 'Description cannot be less than 15 characters!'
	})
	@IsString()
	description: string

	@MinLength(9, {
		message: 'VideoPath cannot be less than 9 characters!'
	})
	@IsString()
	videoPath: string

	@MinLength(9, {
		message: 'ThumbnailPath cannot be less than 9 characters!'
	})
	@IsString()
	thumbnailPath: string

	@IsUUID()
	userId: string

	@IsUUID()
	commentId?: string
}
