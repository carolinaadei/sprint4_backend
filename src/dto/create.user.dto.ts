import {IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, IsNumber, Min, Max} from 'class-validator';

export class CreateUserDto {
   @IsString()
   @IsNotEmpty()
   name: string;
   
   @IsEmail()
   email: string;

   @IsString()
   @MinLength(8)
   password: string;

   @IsNotEmpty()
   @IsNumber()
     @Min(1)
     @Max(5)
   level : number;

   @IsOptional()
   profile_img? : string;
}
