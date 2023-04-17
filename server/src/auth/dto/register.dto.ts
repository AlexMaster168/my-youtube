import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
	@IsEmail()
	email: string;

	@MinLength(3, {
		message: 'Name cannot be less than 3 characters!'
	})
	@IsString()
	name: string;

	@MinLength(6, {
		message: 'Password cannot be less than 6 characters!'
	})
	@IsString()
	password: string;
}
