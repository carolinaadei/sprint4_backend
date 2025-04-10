import { IsString, IsOptional, IsNumber, Min, Max } from 'class-validator';

export class UpdatePlaceDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  accessLevel?: number;
}