import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../user/user.model';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [TypeOrmModule.forFeature([UserModel]), ConfigModule],
	controllers: [AuthController],
	providers: [AuthService]
})
export class AuthModule {}
