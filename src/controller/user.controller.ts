import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Prisma } from '@prisma/client';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {} //-- eu preciso inserir o UserService no controller para poder usar eles nos meus metodos?
  @Get()                                                      // -- usersService e o nome da minha variavel que esta relacionada com o meu UserService que esta no meu service
  findAll():  {                                               // -- uso a val userService para inserir o meu service no codigo
    
    return 'This action returns all users';
  }

  @Post()
  create(): string {
    return 'This action adds a new user';
  }
    
}
