import { Module } from '@nestjs/common';
import { DeportistaService } from './deportista.service';
import { DeportistaController } from './deportista.controller';

@Module({
  controllers: [DeportistaController],
  providers: [DeportistaService],
})
export class DeportistaModule {}
