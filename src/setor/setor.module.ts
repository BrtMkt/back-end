import { Module } from '@nestjs/common';
import { SetorService } from './setor.service';
import { SetorController } from './setor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setor } from './entities/setor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Setor])],
  controllers: [SetorController],
  providers: [SetorService],
})
export class SetorModule {}
