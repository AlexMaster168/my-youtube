import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { VideoModel } from '../video/video.model';
import { CommentModel } from '../comment/comment.model';

@Entity('user')
export class UserModel {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column({ unique: true })
	name: string;

	@Column()
	isVerified: string;

	@Column()
	subscribersCount: number;

	@Column()
	description: string;

	@Column()
	location: string;

	@Column()
	bannerPath: string;

	@Column()
	avatarPath: string;

	@OneToMany(() => VideoModel, (video) => video.user)
	videos?: VideoModel[];

	@OneToMany(() => CommentModel, (comment) => comment.user)
	comments?: CommentModel[];
}
