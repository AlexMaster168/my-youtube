import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindOperator, Repository } from 'typeorm'
import { Comment } from './comment.entity'
import { CommentDto } from './dto/comment.dto'

@Injectable()
export class CommentService {
	constructor(@InjectRepository(Comment)
							private readonly commentRepo: Repository<Comment>) {
	}

	async getByVideoId(videoId: FindOperator<string>) {
		return this.commentRepo.find({
			where: { video: videoId },
			order: {
				createdAt: 'DESC'
			}
		})
	}

	async create(userId: any, dto: CommentDto) {
		return this.commentRepo.create({ ...dto, user: userId })
	}
}
