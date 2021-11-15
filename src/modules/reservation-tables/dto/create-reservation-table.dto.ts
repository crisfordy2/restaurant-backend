import {
    IsInt,
    IsNotEmpty,
    IsDate,
    IsNumberString,
    IsPhoneNumber,
    Length,
} from 'class-validator';

export class CreateReservationTableDto {

  @IsNotEmpty()
  @IsInt()
  reservation_id: number;
  
  @IsInt()
  @IsNotEmpty()
  table_id: number;
}
