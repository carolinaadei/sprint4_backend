import { Body,Controller, Get, Req, Post} from '@nestjs/common'; //Body *Patricia
import { create } from 'domain';
import { CreateUserDto } from 'src/dto/user/create-user.dto'; // LINHA DTO Patricia
import { UserService } from 'src/service/user.service';

/*@Controller('users')
export class UsersController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log(`request.body: ${request.body}`); //teste 
    return 'This action returns all users';
  }
*/

@Controller('users')
export class UsersController{
  constructor (private readonly userService: UserService){}
}

@Get()
findAll():string[]{
  return this.userService.findAll();
}
  /*@Post()
  create(): string {
    return 'This action adds a new user';
  }*/

    
  /*@Post() //Patricia DTO
  create(@Body() dto: CreateUserDto): string {
  console.log(dto);
    return 'User created successfully!!';
  }
    */

  @Post()
  create(@Body() dto: CreateUserDto): string{
    return this.userService.create(dto);
  }
  
  

}
