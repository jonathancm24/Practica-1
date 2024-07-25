import { Test, TestingModule } from '@nestjs/testing';
import { SeparacionController } from './separacion.controller';
import { SeparacionService } from './separacion.service';

describe('SeparacionController', () => {
  let controller: SeparacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeparacionController],
      providers: [SeparacionService],
    }).compile();

    controller = module.get<SeparacionController>(SeparacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
