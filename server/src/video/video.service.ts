import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindOptionsWhere, ILike, MoreThan, Repository } from 'typeorm'
import { Video } from './video.entity'
import { VideoDto } from './dto/video.dto'

@Injectable()
export class VideoService {
	constructor(@InjectRepository(Video)
							private readonly videoRepo: Repository<Video>) {
	}

	async getById(id: number): Promise<Video> {
		const video = await this.videoRepo.findOne({
			where: { id, isPublic: true }
		})
		if (!video)
			throw new HttpException('Video not found', HttpStatus.NOT_FOUND)

		return video
	}

	async getMostPopularByView() {
		return this.videoRepo.find({
			where: {
				views: MoreThan(0)
			},
			order: {
				views: 'DESC'
			}
		})
	}

	async getAll(searchTerm?: string) {
		const whereOptions: FindOptionsWhere<Video> = { isPublic: true }

		if (searchTerm) whereOptions.name = ILike(`%${searchTerm}%`)

		return this.videoRepo.find({
			where: whereOptions,
			order: {
				createdAt: 'DESC'
			}
		})
	}

	async getByUserId(userId: string, isPrivate: boolean = false) {
		const whereOptions: FindOptionsWhere<Video> = { user: userId as any }

		if (!isPrivate) whereOptions.isPublic = true

		return this.videoRepo.find({
			where: whereOptions,
			order: {
				createdAt: 'DESC'
			}
		})
	}

	async createVideo(dto: VideoDto) {
		const video = await this.videoRepo.create(dto)
		return video.id
	}

	async updateVideo(id: number, dto: VideoDto) {
		const findVideo= await this.videoRepo.findOne({
			where: {id}
		})
		if (!findVideo) throw new Error('Video not found');
		return await this.videoRepo.update({ id }, dto);
	}

	async deleteVideo(id: number) {
		const findVideo = await this.videoRepo.findOne({ where: { id } });

		if (!findVideo) throw new Error('Video not found');
		return await this.videoRepo.remove(findVideo);
	}

	async updateCountView(id: number) {
		const findVideo= await this.videoRepo.findOne({
			where: {id}
		})
		if (!findVideo) throw new Error('Video not found');
		const updatedViews = findVideo.views + 1;
		return await this.videoRepo.update({ id }, {
			views: updatedViews
		});
	}

	async updateReaction(id: number, reactionType: 'like' | 'dislike', type: 'inc' | 'dic') {
		const video = await this.videoRepo.findOne({
			where: { id }
		});

		if (!video) throw new Error('Video not found');

		let updatedVideo;

		if (type === 'inc') {
			video[reactionType + 's'] += 1;
			updatedVideo = await this.videoRepo.save(video);
		} else if (type === 'dic') {
			if (video[reactionType + 's'] > 0) {
				video[reactionType + 's'] -= 1;
			}
			updatedVideo = await this.videoRepo.save(video);
		}
		return updatedVideo
	}
}
