import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { Video } from '../video/video.entity';
import { Comment } from '../comment/comment.entity';

@Entity('user')
export class User {
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

	@Column({ default: '' })
	refreshToken: string;

	// @OneToMany(() => Video, (video) => video.users)
	// videos?: Video[];

	// @OneToMany(() => Comment, (comment) => comment.user)
	// comments?: Comment[];
}
