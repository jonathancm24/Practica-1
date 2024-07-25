import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObraModule } from './Obra_de_arte/Obra.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ObraDeArteModule } from './GraphQl/obra_de_arte.module';


@Module({
  imports: [ ObraModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ObraDeArteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
