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
import { UserModule } from './user/user.module';

@Module({
  controllers:[UsersController],
  providers: [UserService, UserRepository],
  imports: [UserModule],
})

export class AppModule{}