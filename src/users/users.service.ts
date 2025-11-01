import { Injectable } from '@nestjs/common';

type User = {
  id: number;
  name: string;
  role: 'admin' | 'user' | 'developer';
};

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John Doe', role: 'admin' },
    { id: 2, name: 'Jane Doe', role: 'user' },
    { id: 3, name: 'John Smith', role: 'developer' },
  ];

  getUsers(role?: 'admin' | 'user' | 'developer'): User[] {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  getUser(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: Pick<User, 'name' | 'role'>): User {
    const newUserId = this.users.length + 1;
    const newUser: User = {
      id: newUserId,
      ...user,
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
