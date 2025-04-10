import { Controller, Get, Req, Post} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log(`request.body: ${request.body}`); //teste 
    return 'This action returns all users';
  }

  @Post()
  create(): string {
    return 'This action adds a new user';
  }
    
 /*@Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
  
*/
}
