import { Module } from '@nestjs/common';
import { DecisoresService } from './decisores.service';
import { DecisoresController } from './decisores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Decisores } from './entities/decisore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Decisores])],
  controllers: [DecisoresController],
  providers: [DecisoresService],
})
export class DecisoresModule {}
