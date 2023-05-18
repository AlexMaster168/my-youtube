import { Controller, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { CommentService } from './comment.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { CommentDto } from './dto/comment.dto'
import { CurrentUser } from '../user/decorators/user.decorator'

@Controller('comment')
export class CommentController {
	constructor(private readonly commentService: CommentService) {
	}

	@Get('by-user/:videoId')
	async getVideoByUserId(@Param('videoId') videoId: any) {
		return this.commentService.getByVideoId(videoId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async createComment(dto: CommentDto) {
		return await this.commentService.create(dto)
	}
}
