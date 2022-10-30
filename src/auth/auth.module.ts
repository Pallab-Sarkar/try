import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PassportModule, UserModule, JwtModule.register({
    secret: "abcdefg",
    signOptions : {
        expiresIn : '60s'
    }
  })],
  controllers: [],
  providers: [LocalStrategy, AuthService, JwtStrategy, UserService],
  exports : [AuthService]
})
export class AuthModule {}