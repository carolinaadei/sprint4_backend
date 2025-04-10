import { Body,Controller, Get, Req, Post} from '@nestjs/common'; //Body *Patricia
import { CreateUserDto } from 'src/dto/user/create-user.dto'; // LINHA DTO Patricia

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log(`request.body: ${request.body}`); //teste 
    return 'This action returns all users';
  }

  /*@Post()
  create(): string {
    return 'This action adds a new user';
  }*/

    
  @Post() //Patricia DTO
  create(@Body() dto: CreateUserDto): string {
  console.log(dto);
    return 'User created successfully!!';
  }
  
  

}
