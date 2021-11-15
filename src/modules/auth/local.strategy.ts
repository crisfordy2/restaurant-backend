import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'phonenumber',
    });
  }

  async validate(phonenumber: string, password: string) {
    try {
      const user = await this.authService.validateUser(phonenumber, password);
      return user;
    } catch (error) {
      throw error;
    }
  }
}
