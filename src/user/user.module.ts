import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtStrategy } from './jwt.strategy';

export const jwtSecret = 'zjP9h6ZI5LoSKCRj';
@Module({
  imports:[
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret:jwtSecret,
      signOptions:{expiresIn:'5m'},
    }),
    UserModule
  ],
  controllers: [UserController],
  providers: [UserService,JwtStrategy],
})
export class UserModule {}
