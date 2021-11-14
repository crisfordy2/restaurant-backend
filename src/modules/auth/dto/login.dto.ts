import { IsEmail, IsPhoneNumber } from 'class-validator';

export class LoginDTO {
  @IsPhoneNumber()
  phonenumber: string;

  password: string;
}
