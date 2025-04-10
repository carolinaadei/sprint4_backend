/*import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
  */
 import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { UserService } from 'src/service/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): string[] {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() dto: CreateUserDto): string {
    return this.userService.create(dto);
  }
}

