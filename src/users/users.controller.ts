import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type { User, UserRole } from './types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Query('role') role?: UserRole): User[] {
    return this.usersService.getUsers(role);
  }

  @Get(':id')
  getUser(@Param('id') id: string): User | undefined {
    return this.usersService.getUser(parseInt(id));
  }

  @Post()
  createUser(@Body() body: Pick<User, 'name' | 'role'>): User {
    return this.usersService.createUser({
      name: body.name,
      role: body.role,
    });
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() body: { name: string }): User {
    return this.usersService.updateUser(parseInt(id), {
      id: parseInt(id),
      name: body.name,
      role: 'user' as UserRole,
    });
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    this.usersService.deleteUser(parseInt(id));
    return 'User deleted';
  }
}
