import { Body, Controller, HttpCode, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common'
import { UserService } from './user.service';
import { RegisterDto } from '../auth/dto/register.dto'
import { UserDto } from './dto/user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('profile')
  async profile(@Body() dto: UserDto): Promise<any> {
    return await this.userService.updateProfile(1234543,dto);
  }
}
