import { Test, TestingModule } from '@nestjs/testing';
import { SeparacionService } from './separacion.service';

describe('SeparacionService', () => {
  let service: SeparacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeparacionService],
    }).compile();

    service = module.get<SeparacionService>(SeparacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
