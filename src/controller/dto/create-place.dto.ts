import { IsString, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';
export class CreatePlaceDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  acessLevel: number;
}
  

