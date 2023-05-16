import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { Video as VideoEntity } from '../video/video.entity'
import { Comment as CommentEntity } from '../comment/comment.entity'

export enum UserRole {
	User = 'user',
	Admin = 'admin'
}

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
	avatarPath: string

	@Column({ default: '' })
	refreshToken: string

	@Column({ type: 'enum', enum: UserRole, default: UserRole.User })
	role: UserRole

	@OneToMany(() => VideoEntity, video => video.user)
	video: VideoEntity[];

	@OneToMany(() => CommentEntity, comment => comment.user)
	comment?: CommentEntity[];
}
