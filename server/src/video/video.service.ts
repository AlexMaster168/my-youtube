import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MoreThan, Repository } from 'typeorm'
import { Video } from './video.entity'

@Injectable()
export class VideoService {
	constructor(@InjectRepository(Video)
							private readonly videoRepo: Repository<Video>) {
	}

	async getById(id: number): Promise<Video> {
		const video = await this.videoRepo.findOne({
			where: { id }
		})
		if (!video)
			throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND)

		return video
	}

	async getMostPopular() {
		return this.videoRepo.find({
			where: {
				views: MoreThan(0)
			},
			order: {
				views: 'DESC'
			}
		})
	}
}
