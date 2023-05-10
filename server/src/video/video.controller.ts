import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { likesType, VideoService } from './video.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { CurrentUser } from '../user/decorators/user.decorator'
import { VideoDto } from './dto/video.dto'
import { User } from '../user/user.entity'
import { AccessToVideo } from '../user/decorators/AccessToVideo.decorator'

@Controller('video')
export class VideoController {
	constructor(private readonly videoService: VideoService) {
	}

	@Get(':id')
	@Auth()
	async getVideo(@Param('id') id: number) {
		return this.videoService.getById(id)
	}

	@Get('by-user/:userId')
	@Auth()
	async getVideoByUserId(@Param('userId') userId: any) {
		return this.videoService.getByUserId(userId)
	}

	@Get('')
	async getAll(@Query('searchTerm') searchTerm?: string, @Query('category') category?: string) {
		return this.videoService.getAll(searchTerm, category)
	}

	@Get('popular')
	async getMostPopular(@CurrentUser('id') id: number) {
		return this.videoService.getMostPopularByViews()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async createVideo(dto: VideoDto): Promise<any> {
		return await this.videoService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async updateVideo(
		@Param('id') id: number,
		@Body() dto: VideoDto,
		@AccessToVideo() user: User
	): Promise<any> {
		return await this.videoService.update(id, dto)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async deleteVideo(
		@Param('id') id: number,
		@AccessToVideo() user: User
	): Promise<any> {
		return await this.videoService.delete(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('views/:videoId')
	async updateViews(@Param('videoId') videoId: number): Promise<any> {
		return await this.videoService.updateCountView(videoId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('likes/:videoId')
	@Auth()
	async updateLikes(@Param('videoId') videoId: number, @Query('type') type: likesType): Promise<any> {
		return await this.videoService.updateReaction(videoId, type)
	}
}
