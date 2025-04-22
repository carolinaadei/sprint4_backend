import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CreateUserDto } from '../dto/create.user.dto'
import { UpdateUserDto } from '../dto/update.user.dto'
import { UserRepository } from '../repository/user.repository'

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    findAll() {
        return this.userRepository.findAll()
    }

    findOne(id: number) {
        return this.userRepository.findOne(id)
    }

    create(data: CreateUserDto) {
        return this.userRepository.create(data)
    }    

    remove(id: number) {
        return this.userRepository.remove(id)
    }

    update(id: number, data: UpdateUserDto) {
        return this.userRepository.update(id, data)
    }

}