import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateOrderStatusDto {
  @IsNotEmpty()
  @MaxLength(50)
  description: string;
}
