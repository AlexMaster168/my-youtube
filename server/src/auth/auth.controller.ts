import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { RefreshDto } from './dto/refresh.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('register')
	async register(@Body() dto: RegisterDto): Promise<any> {
		const result = await this.authService.register(dto);
		return {
			message: 'Пользователь успешно зарегистрирован',
			data: result
		};
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto): Promise<any> {
		const result = await this.authService.login(dto);
		return {
			message: 'Успешный вход в систему',
			data: result
		};
	}

	@Post('refresh')
	async refreshToken(@Body() dto: RefreshDto): Promise<any> {
		const result = await this.authService.refreshTokens(dto.refreshToken);
		return {
			message: 'Токен обновлен',
			data: result
		};
	}
}
