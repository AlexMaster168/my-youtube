import { IsEmail, IsOptional, IsString } from 'class-validator'

export class UserDto {
	@IsEmail({}, { message: 'Invalid email format!' })
	@IsOptional()
	email?: string;

	password?: string;

	@IsString()
	name: string;

	@IsString()
	description: string;

	@IsString()
	location: string;

	@IsString()
	avatarPath: string;
}
