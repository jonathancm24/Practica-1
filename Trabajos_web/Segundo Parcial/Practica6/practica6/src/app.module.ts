import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanchaModule } from './cancha/cancha.module';
import { DeportistaModule } from './deportista/deportista.module';
import { SeparacionModule } from './separacion/separacion.module';
import { Cancha } from './cancha/entities/cancha.entity'
import { Deportista } from './deportista/entities/deportista.entity';
import { Separacion } from './separacion/entities/separacion.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      database: 'Alquiler_de_Canchas',
      entities: [Cancha, Deportista, Separacion],
      synchronize: true,
      extra: {
        trustServerCertificate: true,
        options: {
          trustedConnection: true,
      },
    }
    }),
    CanchaModule,
    DeportistaModule,
    SeparacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
