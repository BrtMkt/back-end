import { Module } from '@nestjs/common';
import { ImportOrExportService } from './import-or-export.service';
import { ImportOrExportController } from './import-or-export.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cargo } from 'src/cargo/entities/cargo.entity';
import { Setor } from 'src/setor/entities/setor.entity';
import { Decisores } from 'src/decisores/entities/decisore.entity';
import { Departamento } from 'src/departamento/entities/departamento.entity';
import { Cnae } from 'src/cnae/entities/cnae.entity';
import { Empresa } from 'src/empresa/entities/empresa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa, Cargo, Setor, Decisores, Departamento, Cnae])],
  controllers: [ImportOrExportController],
  providers: [ImportOrExportService],
})
export class ImportOrExportModule {}
