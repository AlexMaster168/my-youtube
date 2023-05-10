import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Video as VideoEntity } from '../video/video.entity'

@Entity('category')
export class Category {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@Column()
	name: string;

	@OneToMany(() => VideoEntity, video => video.category)
	video: VideoEntity[];
}
