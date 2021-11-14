import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '~modules/users/entities/user.entity';
import { UsersService } from '~modules/users/users.service';
import { LoginDTO } from './dto/login.dto';
import { UserPayload } from './interfaces/user-payload.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(phonenumber: string, password: string) {
    try {
      const user = await this.usersService.getByPhoneNumber(phonenumber);
      if (!(await user.validatePassword(password))) {
        throw new UnauthorizedException();
      }
      const { password: _password, ..._user } = user;
      return _user;
    } catch (error) {
      throw error;
    }
  }

  async login(loginData: LoginDTO) {
    try {
      const { phonenumber, password } = loginData;
      const user = await this.validateUser(phonenumber, password);
      const payload = {
        phonenumber,
        userId: user.id,
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw error;
    }
  }
}
