import { IsString, IsUUID, MinLength } from 'class-validator'

export class CommentDto {
	@MinLength(3, {
		message: 'Message cannot be less than 3 characters!'
	})
	@IsString()
	message: string

	@IsUUID()
	videoId: string
}
