import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { MoreThan, Repository } from 'typeorm'
import { UserDto } from './dto/user.dto'
import { genSalt, hash } from 'bcryptjs'

@Injectable()
export class UserService {
	constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {
	}

	async getById(id: number): Promise<User> {
		const user = await this.userRepo.findOne({
			where: { id },
			select: ['id', 'email', 'subscribersCount', 'avatarPath', 'location', 'description', 'name', 'isVerified']
		})
		if (!user)
			throw new HttpException('User not found', HttpStatus.NOT_FOUND)
		return user
	}

	async getUser(id: number) {
		const queryBuilder = this.userRepo.createQueryBuilder('user')
			.leftJoinAndSelect('user.video', 'video')
			.select(['user', 'COUNT(video) as videosCount'])
			.where('user.id = :id', { id })
			.groupBy('user.id');

		return await queryBuilder.getRawOne();
	}

	async updateProfile(id: number, dto: UserDto) {
		const user = await this.getById(id)

		const isSameEmail = await this.userRepo.findOne({ where: { email: dto.email } })
		if (isSameEmail && id !== Number(isSameEmail.id)) throw new NotFoundException('Email is busy')

		if (dto.password) {
			const salt = await genSalt(10)
			user.password = await hash(dto.password, salt)
		}
		user.email = dto.email
		user.name = dto.name
		user.description = dto.description
		user.location = dto.location
		user.avatarPath = dto.avatarPath
		await this.userRepo.save(user)
		return
	}

	async getMostPopular() {
		return this.userRepo.find({
			where: {
				subscribersCount: MoreThan(0)
			},
			order: {
				subscribersCount: 'DESC'
			},
			select: ['id', 'email', 'subscribersCount', 'avatarPath', 'location', 'description', 'name', 'isVerified']
		})
	}
}
