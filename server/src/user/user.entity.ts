import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { Video } from '../video/video.entity'
import { Comment } from '../comment/comment.entity'

@Entity('user')
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@Column({ unique: true })
	email: string

	@Column()
	password: string

	@Column({ unique: true })
	name: string

	@Column({ default: false })
	isVerified: boolean

	@Column({ default: 0 })
	subscribersCount: number

	@Column({ nullable: true })
	description: string

	@Column({ nullable: true })
	location: string

	@Column({ nullable: true })
	bannerPath: string

	@Column({ nullable: true })
	avatarPath: string

	@Column({ default: '' })
	refreshToken: string

	// @OneToMany(() => Video, (video) => video.users, { nullable: true })
	// videos?: Video[];
	//
	// @OneToMany(() => Comment, (comment) => comment.user, { nullable: true })
	// comments?: Comment[];
}
