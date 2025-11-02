import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'developer';
};

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'admin' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'user' },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'developer',
    },
  ];

  getUsers(role?: 'admin' | 'user' | 'developer'): User[] {
    if (role) {
      if (!['admin', 'user', 'developer'].includes(role)) {
        throw new BadRequestException('Invalid role');
      }
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  getUser(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUserId = this.users.length + 1;
    const newUser: User = {
      id: newUserId,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, user: Partial<User>): User {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = { ...this.users[index], ...user };
    return this.users[index];
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
