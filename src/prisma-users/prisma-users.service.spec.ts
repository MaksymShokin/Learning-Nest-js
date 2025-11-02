import { Test, TestingModule } from '@nestjs/testing';
import { PrismaUsersService } from './prisma-users.service';

describe('PrismaUsersService', () => {
  let service: PrismaUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaUsersService],
    }).compile();

    service = module.get<PrismaUsersService>(PrismaUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
