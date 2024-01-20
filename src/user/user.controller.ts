import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entities/auth.entity';
import { LoginDto } from './dto/login.dto';

@Controller('user')
@ApiTags("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  @ApiOkResponse({type:AuthEntity})
  login(@Body() {nama,email} :LoginDto ) {
    return this.userService.login(nama,email);
  }

}
