import { Module } from '@nestjs/common';
import { UsersController } from 'src/app.controller';
import { UserService } from 'src/service/user.service';

@Module({
    controllers: [UsersController],
    providers: [UserService],
})
export class UserModule {}
