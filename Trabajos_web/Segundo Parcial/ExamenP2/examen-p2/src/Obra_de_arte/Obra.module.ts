import {Module} from '@nestjs/common';
import {ObraController} from './Obra.controller';
import {ObraService} from './Obra.service';
import { PrismaService } from "../../prisma/prisma.service";


@Module({
    controllers: [ObraController],
    providers: [ObraService, PrismaService]
})
export class ObraModule {}