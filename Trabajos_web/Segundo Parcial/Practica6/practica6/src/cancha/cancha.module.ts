import { Module } from '@nestjs/common';
import { CanchaService } from './cancha.service';
import { CanchaController } from './cancha.controller';

@Module({
  controllers: [CanchaController],
  providers: [CanchaService],
})
export class CanchaModule {}
