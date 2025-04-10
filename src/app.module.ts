/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
*/

import {Module } from '@nestjs/common';
import { UsersController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { UserRepository } from './repository/user.repository';

@Module({
  controllers:[UsersController],
  providers: [UserService, UserRepository],
})

export class AppModule{}