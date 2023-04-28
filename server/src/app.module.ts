import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { VideoModule } from './video/video.module'
import { CommentModule } from './comment/comment.module'
import { AuthModule } from './auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module'
import { getTypeOrmConfig } from './config'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTypeOrmConfig
		}),
		UserModule,
		VideoModule,
		CommentModule,
		AuthModule
	]
})
export class AppModule {
}
