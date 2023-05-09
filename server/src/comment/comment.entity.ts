import {
	Column,
	CreateDateColumn, Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { User as UserEntity } from '../user/user.entity';
import { Video as VideoEntity } from '../video/video.entity';

@Entity('comment')
export class Comment {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@Column()
	message: string;

	@ManyToOne(() => UserEntity, user => user.comment)
	user: UserEntity;

	@ManyToOne(() => VideoEntity)
	video: VideoEntity;
}
