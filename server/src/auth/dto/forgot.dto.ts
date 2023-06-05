import { IsEmail, IsString, MinLength } from 'class-validator'

export class ForgotDto {
	@IsEmail()
	email: string;

	@MinLength(9, {
		message: 'Phone cannot be less than 9 characters!'
	})

	@IsString()
	phone: string;

	@MinLength(6, {
		message: 'Password cannot be less than 6 characters!'
	})

	@IsString()
	password: string;
}
