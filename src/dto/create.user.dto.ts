import {IsEmail, IsNotEmpty, IsString, MinLength} from '../../node_module/class-validator';

export class CreateUserDto {
   @IsString()
   @IsNotEmpty()
   name: string;
   
   @IsEmail()
   email: string;

   @IsString()
   @MinLength(8)
   password: string;
}
