import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user/create-user.dto';

@Injectable()
export class UserService {
  private users: string[] = [];

  findAll(): string[] {
    return this.users;
  }

  create(dto: CreateUserDto): string {
    const newUser = `${dto.name} (${dto.email})`;
    this.users.push(newUser);
    return 'User created successfully!!';
  }
}