import { IsBoolean } from 'class-validator';

export class BlockPlaceDto {
  @IsBoolean()
  is_blocked: boolean;
}