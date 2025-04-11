import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Prisma, User } from '@prisma/client';
import {createUserDto} from


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {} //-- eu preciso inserir o UserService no controller para poder usar eles nos meus metodos?
  @Get()                                                      // -- usersService e o nome da minha variavel que esta relacionada com o meu UserService que esta no meu service
  findAll():   {                                               // -- uso a val userService para inserir o meu service no codigo
    return this.usersService.find.findAll
  }
  
  @Get(':id') 
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() data:Prisma.UserCreateInput) {
    return this.usersService.create(data);
    
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput) {
    return this.usersService.update(+identity, data);
  }

}



