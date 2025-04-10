import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UserService{
    constructor(private readonly userRepository : UserRepository){}
    
    create(dto: CreateUserDto) : string{

        return this.userRepository.save(dto);
    }

    findAll(): string[]{
        return this.userRepository.findAll();
    }
}