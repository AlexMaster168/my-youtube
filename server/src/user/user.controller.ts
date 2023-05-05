import { Body, Controller, Get, HttpCode, Put, UsePipes, ValidationPipe } from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto } from './dto/user.dto'
import { Auth } from '../auth/decorators/auth.decorator'
import { CurrentUser } from './decorators/user.decorator'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {
	}

	@Get('profile')
	@Auth()
	async getProfile(@CurrentUser('id') id: number) {
		return this.userService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('profile')
	@Auth()
	async updateProfile(@CurrentUser('id') id: number, @Body() dto: UserDto): Promise<any> {
		return await this.userService.updateProfile(id, dto)
	}

	@Get('popular')
	async getMostPopular(@CurrentUser('id') id: number) {
		return this.userService.getMostPopular()
	}
}
