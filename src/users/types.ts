export type UserRole = 'admin' | 'user' | 'developer';

export type User = {
  id: number;
  name: string;
  role: UserRole;
};
