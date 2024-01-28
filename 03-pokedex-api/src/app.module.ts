import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { env_config } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ env_config ],
      validationSchema: JoiValidationSchema,
    }),
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..','public'),
    exclude: ['/api/(.*)'],
  }), 
  MongooseModule.forRoot(process.env.MONGO_DB,{
    dbName: 'pokemons-nest'
  }),
  PokemonModule,
  CommonModule,
  SeedModule, 
],
  controllers: [],
  providers: [],
})
export class AppModule {}
