import { Module } from '@nestjs/common';
import { auth } from './auth';
import { AuthModule } from '@thallesp/nestjs-better-auth';

@Module({
  imports: [AuthModule.forRoot(auth)],
})
export class AuthsModule {}
