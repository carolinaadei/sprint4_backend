import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt'; 
import { CreateUserDto } from '../dto/create.user.dto';
import { UserService } from '../service/user.service';


type SafeUser = Omit<User, 'password'>;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}


  async validateUser(email: string, pass: string): Promise<SafeUser | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result; 
    }
    return null;
  }

  
  async login(user: SafeUser) {
    const payload = { email: user.email, sub: user.id };
    
    return {
      access_token: await this.jwtService.signAsync(payload),
      user, 
    };
  }

  async signUp(dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}