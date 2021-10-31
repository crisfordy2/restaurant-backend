import { IsDateString, IsInt } from "class-validator";

export class CreateOrderDto {
  @IsDateString()
  order_date: string;

  @IsInt()
  order_type_id: number;

  @IsInt()
  order_status_id: number;
}
