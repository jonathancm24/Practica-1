import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeparacionService } from './separacion.service';
import { CreateSeparacionDto } from './dto/create-separacion.dto';
import { UpdateSeparacionDto } from './dto/update-separacion.dto';

@Controller('separacion')
export class SeparacionController {
  constructor(private readonly separacionService: SeparacionService) {}

  @Post()
  create(@Body() createSeparacionDto: CreateSeparacionDto) {
    return this.separacionService.create(createSeparacionDto);
  }

  @Get()
  findAll() {
    return this.separacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.separacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeparacionDto: UpdateSeparacionDto) {
    return this.separacionService.update(+id, updateSeparacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.separacionService.remove(+id);
  }
}
