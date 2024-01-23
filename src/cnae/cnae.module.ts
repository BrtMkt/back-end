import { Module } from '@nestjs/common';
import { CnaeService } from './cnae.service';
import { CnaeController } from './cnae.controller';
import { Cnae } from './entities/cnae.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cnae])],
  controllers: [CnaeController],
  providers: [CnaeService],
})
export class CnaeModule {}
