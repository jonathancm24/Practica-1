import { Module } from '@nestjs/common';
import { SeparacionService } from './separacion.service';
import { SeparacionController } from './separacion.controller';

@Module({
  controllers: [SeparacionController],
  providers: [SeparacionService],
})
export class SeparacionModule {}
