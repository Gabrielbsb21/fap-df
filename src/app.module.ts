import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SiaModule } from './sia/sia.module';
import { SihModule } from './sih/sia.module';
import { SinascModule } from './sinasc/sinasc.module';
import { SimModule } from './sim/sim.module';
import { ObitosResidentesDFModule } from './obitosResidentesDF/obitos-residentes-df.module';
import { PainelProcedimentosModule } from './painelProcedimentos/painel-procedimentos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    SiaModule,
    SihModule,
    SinascModule,
    ObitosResidentesDFModule,
    PainelProcedimentosModule,
    SimModule,
  ],
})
export class AppModule {}
