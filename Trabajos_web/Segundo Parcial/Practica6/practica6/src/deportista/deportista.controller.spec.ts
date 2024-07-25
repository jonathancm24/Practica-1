import { Test, TestingModule } from '@nestjs/testing';
import { DeportistaController } from './deportista.controller';
import { DeportistaService } from './deportista.service';

describe('DeportistaController', () => {
  let controller: DeportistaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeportistaController],
      providers: [DeportistaService],
    }).compile();

    controller = module.get<DeportistaController>(DeportistaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
