import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateUserTypeDto {
  @IsNotEmpty()
  @MaxLength(50)
  description: string;
}
