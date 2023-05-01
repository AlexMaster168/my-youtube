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
		return await this.authService.register(dto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto): Promise<any> {
		return await this.authService.login(dto);
	}

	@Post('refresh')
	async refreshToken(@Body() dto: RefreshDto): Promise<any> {
		return await this.authService.refreshTokens(dto.refreshToken);
	}
}
