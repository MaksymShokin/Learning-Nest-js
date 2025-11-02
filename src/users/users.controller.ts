import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type { User, UserRole } from './types';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Query('role') role?: UserRole): User[] {
    return this.usersService.getUsers(role);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): User | undefined {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto): User {
    return this.usersService.createUser(createUserDto);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ): User {
    return this.usersService.updateUser(id, {
      id,
      ...updateUserDto,
    });
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): string {
    this.usersService.deleteUser(id);
    return 'User deleted';
  }
}
