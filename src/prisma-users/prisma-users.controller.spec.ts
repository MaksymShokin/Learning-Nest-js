import { Test, TestingModule } from '@nestjs/testing';
import { PrismaUsersController } from './prisma-users.controller';
import { PrismaUsersService } from './prisma-users.service';

describe('PrismaUsersController', () => {
  let controller: PrismaUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrismaUsersController],
      providers: [PrismaUsersService],
    }).compile();

    controller = module.get<PrismaUsersController>(PrismaUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
