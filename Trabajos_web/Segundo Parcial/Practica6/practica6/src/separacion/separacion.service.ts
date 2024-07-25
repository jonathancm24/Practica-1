import { Injectable } from '@nestjs/common';
import { CreateSeparacionDto } from './dto/create-separacion.dto';
import { UpdateSeparacionDto } from './dto/update-separacion.dto';

@Injectable()
export class SeparacionService {
  create(createSeparacionDto: CreateSeparacionDto) {
    return 'This action adds a new separacion';
  }

  findAll() {
    return `This action returns all separacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} separacion`;
  }

  update(id: number, updateSeparacionDto: UpdateSeparacionDto) {
    return `This action updates a #${id} separacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} separacion`;
  }
}
