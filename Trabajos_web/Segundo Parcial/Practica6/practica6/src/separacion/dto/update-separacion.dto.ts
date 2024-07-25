import { PartialType } from '@nestjs/mapped-types';
import { CreateSeparacionDto } from './create-separacion.dto';

export class UpdateSeparacionDto extends PartialType(CreateSeparacionDto) {}
