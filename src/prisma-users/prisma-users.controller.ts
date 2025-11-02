import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PrismaUsersService } from './prisma-users.service';
import { Prisma } from 'generated/prisma/client';

@Controller('prisma-users')
export class PrismaUsersController {
  constructor(private readonly prismaUsersService: PrismaUsersService) {}

  @Post()
  create(@Body() createPrismaUserDto: Prisma.UserCreateInput) {
    return this.prismaUsersService.create(createPrismaUserDto);
  }

  @Get()
  findAll() {
    return this.prismaUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prismaUsersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePrismaUserDto: Prisma.UserUpdateInput,
  ) {
    return this.prismaUsersService.update(+id, updatePrismaUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prismaUsersService.remove(+id);
  }
}
