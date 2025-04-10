//Repository User Patricia
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/dto/user/create-user.dto";

@Injectable()
export class UserRepository{
    private users: CreateUserDto[]= [];

    save(dto: CreateUserDto) : string{
        this.users.push(dto);
        return 'User saved in repository';
    }

    findAll():string[]{
        return this.users.map(=> `${user.name}- ${user.emaill}`);
    }
}