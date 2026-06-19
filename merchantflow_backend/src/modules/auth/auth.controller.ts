import { Controller, Get } from '@nestjs/common';
import { auth } from './auth';

@Controller('auth')
export class AuthController {
  @Get('test')
  test() {
    return auth;
  }
}
