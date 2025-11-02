import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaUsersModule } from './prisma-users/prisma-users.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, PrismaUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
