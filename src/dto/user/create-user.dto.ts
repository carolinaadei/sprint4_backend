import {IsEmail, IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    password: string;

    @IsInt()
    @Min(1)
    @Max(5)
    level: number;
}