import { IsString, IsOptional, IsNumber, Min, Max, IsNotEmpty } from 'class-validator';

export class UpdatePlaceDto {
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  accessLevel?: number;
}