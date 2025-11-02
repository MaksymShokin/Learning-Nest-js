import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PrismaUsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createPrismaUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createPrismaUserDto,
    });
  }
  async findAll(role?: 'ADMIN' | 'USER' | 'DEVELOPER') {
    if (role) {
      if (!['ADMIN', 'USER', 'DEVELOPER'].includes(role)) {
        throw new BadRequestException('Invalid role');
      }
      return this.databaseService.user.findMany({
        where: {
          role,
        },
      });
    }
    return this.databaseService.user.findMany();
  }
  async findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      },
    });
  }
  async update(id: number, updatePrismaUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updatePrismaUserDto,
    });
  }
  async remove(id: number) {
    return this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
