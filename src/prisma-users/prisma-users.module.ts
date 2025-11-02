import { Module } from '@nestjs/common';
import { PrismaUsersService } from './prisma-users.service';
import { PrismaUsersController } from './prisma-users.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PrismaUsersController],
  providers: [PrismaUsersService],
})
export class PrismaUsersModule {}
