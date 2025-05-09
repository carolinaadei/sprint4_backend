import { Module } from '@nestjs/common'
import { UsersController } from 'src/controller/user.controller'
import { PrismaService } from 'src/prisma.service'
import { UserRepository } from 'src/repository/user.repository'
import { UserService } from 'src/service/user.service'

@Module({
  controllers: [UsersController],
  providers: [UserService, UserRepository, PrismaService],
})
export class UserModule {}
