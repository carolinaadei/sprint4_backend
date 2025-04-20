
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create.user.dto';
import { UpdateUserDto } from '../dto/update.user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {} //-- eu preciso inserir o UserService no controller para poder usar eles nos meus metodos?
  @Get()                                                      // -- usersService e o nome da minha variavel que esta relacionada com o meu UserService que esta no meu service
  findAll() {                                               // -- uso a val userService para inserir o meu service no codigo
    return this.userService.findAll();
  }

  @Get(':id') 
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
    return this.userService.create(CreateUserDto)
    
=======
import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UserService } from 'src/service/user.service';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt')) 
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(AuthGuard('jwt')) 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post() 
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @UseGuards(AuthGuard('jwt')) 
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() UpdateUserDto: UpdateUserDto) {
    return this.userService.update(id, UpdateUserDto)
  @UseGuards(AuthGuard('jwt')) 
  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput) {
    return this.userService.update(+id, data);
  }

}



