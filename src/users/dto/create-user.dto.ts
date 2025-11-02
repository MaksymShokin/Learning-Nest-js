import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['admin', 'user', 'developer'], { message: 'Invalid role' })
  role: 'admin' | 'user' | 'developer';
}
