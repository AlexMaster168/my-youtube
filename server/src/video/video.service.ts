import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindOptionsWhere, ILike, MoreThan, Repository } from 'typeorm'
import { Video } from './video.entity'
import { VideoDto } from './dto/video.dto'

export type likesType = 'inc' | 'dis';

@Injectable()
export class VideoService {
	constructor(@InjectRepository(Video)
							private readonly videoRepo: Repository<Video>) {
	}

	async getById(id: number, isPublic = true): Promise<Video> {
		const video = await this.videoRepo.findOne({
			where: isPublic ? { id, isPublic: true } : { id }
		})
		if (!video) throw new HttpException('Video not found', HttpStatus.NOT_FOUND)

		return video
	}

	async getMostPopularByViews() {
		return this.videoRepo.find({
			where: {
				views: MoreThan(0)
			},
			order: {
				views: 'DESC'
			}
		})
	}

	async getAll(searchTerm?: string, category?: any) {
		const whereOptions: FindOptionsWhere<Video> = { isPublic: true };

		if (searchTerm) whereOptions.name = ILike(`%${searchTerm}%`);
		if (category) whereOptions.category = category;

		return await this.videoRepo.createQueryBuilder('video')
			.leftJoinAndSelect('video.user', 'user')
			.where(whereOptions)
			.orderBy('video.createdAt', 'DESC')
			.getMany();
	}


	async getByUserId(userId: number, isPrivate = false) {
		const whereOptions: FindOptionsWhere<Video> = { user: userId as any }

		if (!isPrivate) whereOptions.isPublic = true

		return this.videoRepo.find({
			where: whereOptions,
			order: {
				createdAt: 'DESC'
			}
		})
	}

	async create(dto: VideoDto) {
		const video = await this.videoRepo.create(dto)
		return video.id
	}

	async update(id: number, dto: VideoDto) {
		const findVideo = await this.videoRepo.findOne({
			where: { id }
		})
		if (!findVideo) throw new Error('Video not found')
		return await this.videoRepo.update({ id }, dto)
	}

	async delete(id: number) {
		const findVideo = await this.videoRepo.findOne({ where: { id } })

		if (!findVideo) throw new Error('Video not found')
		return await this.videoRepo.remove(findVideo)
	}

	async updateCountView(id: number) {
		const findVideo = await this.videoRepo.findOne({
			where: { id }
		})
		if (!findVideo) throw new Error('Video not found')
		const updatedViews = findVideo.views + 1
		return await this.videoRepo.update({ id }, {
			views: updatedViews
		})
	}

	async updateReaction(id: number, type?: likesType) {
		if (!type) throw new BadRequestException('type query is invalid')

		const findVideo = await this.videoRepo.findOne({
			where: { id }
		})

		if (!findVideo) throw new Error('Video not found')
		const updatedLikes = type === 'inc' ? findVideo.likes + 1 : findVideo.likes - 1
		return await this.videoRepo.update({ id }, {
			likes: updatedLikes
		})
	}
}
