import { Body, Controller, Get, HttpCode, Param, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto } from './dto/user.dto'
import { Auth } from '../auth/decorators/auth.decorator'
import { Roles } from './decorators/roles.decorator'
import { UserRole } from './user.entity'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {
	}

	@Get('profile')
	@Auth()
	async getProfile(@Query('id') id: number) {
		return this.userService.getUser(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Patch('profile')
	@Auth()
	async updateProfile(@Query('id') id: number, @Body() dto: UserDto) {
		return await this.userService.updateProfile(id, dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Patch(':id')
	@Auth()
	@Roles(UserRole.Admin)
	async updateUser(@Param('id') id: number, @Body() dto: UserDto) {
		return await this.userService.updateProfile(id, dto)
	}
	@Get('popular')
	async getMostPopular() {
		return this.userService.getMostPopular()
	}
}
