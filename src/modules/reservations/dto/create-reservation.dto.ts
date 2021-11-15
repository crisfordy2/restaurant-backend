import {
    IsInt,
    IsNotEmpty,
    IsDate,
    IsNumberString,
    IsPhoneNumber,
    Length,
} from 'class-validator';

export class CreateReservationDto {    
  
  @IsNotEmpty()
  @IsDate()
  reservation_date: Date;

  @IsNotEmpty()
  @IsInt()
  hour_date: number;

  @IsNotEmpty()
  @IsInt()
  customer_id: number;
  
  @IsInt()
  @IsNotEmpty()
  reservation_status_id: number;

}
