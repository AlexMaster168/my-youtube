import { IsEmail, IsString, MinLength } from 'class-validator'

export class UserDto {
	@IsEmail()
	email: string;

	password?: string;

	@MinLength(3, {
		message: 'Name cannot be less than 3 characters!'
	})
	@IsString()
	name: string;

	@MinLength(15, {
		message: 'Description cannot be less than 15 characters!'
	})
	@IsString()
	description: string;

	@MinLength(5, {
		message: 'Location cannot be less than 5 characters!'
	})
	@IsString()
	location: string;

	@MinLength(9, {
		message: 'AvatarPath cannot be less than 9 characters!'
	})
	@IsString()
	avatarPath: string;
}
