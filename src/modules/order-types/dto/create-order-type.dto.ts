import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateOrderTypeDto {
  @IsNotEmpty()
  @MaxLength(50)
  description: string;
}
