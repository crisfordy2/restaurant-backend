import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '~modules/users/entities/user.entity';
import { UsersService } from '~modules/users/users.service';
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

  async login(user: User) {
    const payload: UserPayload = {
      phonenumber: user.phonenumber,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
