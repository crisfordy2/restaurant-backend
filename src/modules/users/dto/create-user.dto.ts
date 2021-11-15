import {
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsPhoneNumber,
  Length,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(50, 50)
  name: string;

  @IsNotEmpty()
  @Length(50, 50)
  lastname: string;

  @IsNotEmpty()
  @IsPhoneNumber('CO')
  @Length(50, 50)
  phonenumber: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(50, 50)
  identification: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsInt()
  user_type_id: number;
}
