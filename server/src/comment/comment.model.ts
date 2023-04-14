import {
	Column,
	CreateDateColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { UserModel } from '../user/user.model';
import { VideoModel } from '../video/video.model';

export class CommentModel {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@Column()
	message: string;

	@ManyToOne(() => UserModel, (user) => user.comments)
	user: UserModel;

	@ManyToOne(() => VideoModel, (video) => video.comments)
	video: VideoModel;
}
