import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/data-source';
import { DepartamentoModule } from './departamento/departamento.module';
import { SetorModule } from './setor/setor.module';
import { CargoModule } from './cargo/cargo.module';
import { CnaeModule } from './cnae/cnae.module';
import { DecisoresModule } from './decisores/decisores.module';
import { EmpresaModule } from './empresa/empresa.module';
import { ImportOrExportModule } from './import-or-export/import-or-export.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    DepartamentoModule,
    SetorModule,
    CargoModule,
    CnaeModule,
    DecisoresModule,
    EmpresaModule,
    ImportOrExportModule,
  ],
})
export class AppModule {}
