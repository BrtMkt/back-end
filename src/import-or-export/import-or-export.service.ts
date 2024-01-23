import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import * as csv from 'csv-parser';
import { Decisores } from 'src/decisores/entities/decisore.entity';
import { Empresa } from 'src/empresa/entities/empresa.entity';
import { Setor } from 'src/setor/entities/setor.entity';
import { Cargo } from 'src/cargo/entities/cargo.entity';
import { Departamento } from 'src/departamento/entities/departamento.entity';
import { Cnae } from 'src/cnae/entities/cnae.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { error } from 'console';


@Injectable()
export class ImportOrExportService {
  constructor(
    @InjectRepository(Decisores)
    private readonly decisoresRepository: Repository<Decisores>,
    @InjectRepository(Empresa)
    private readonly empresasRepository: Repository<Empresa>,
    @InjectRepository(Setor)
    private readonly setorRepository: Repository<Setor>,
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>,
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
    @InjectRepository(Cnae)
    private readonly cnaeRepository: Repository<Cnae>,
  ) { }
  private async decisores(body) {
    try {
      const decisionExist = await this.decisoresRepository.findOne({
        where: {
          email: body.email,
        },
      });
      const company = await this.empresasRepository.findOne({
        where: { documento: body.documento },
      });

      if (decisionExist) {
        await this.decisoresRepository.update(decisionExist.id, {
          nome: body.nome,
          email: body.email,
          codigoArea: body.codigoArea,
          telefone: body.telefone,
          linkedin: body.linkedin,
          departamento: Number(body.departamento) || null,
          cargo: Number(body.cargo) || null,
          empresa: company.id,
          observacao: body.observacao,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      } else {
        await this.decisoresRepository.save({
          nome: body.nome,
          email: body.email,
          codigoArea: body.codigoArea,
          telefone: body.telefone,
          linkedin: body.linkedin,
          departamento: Number(body.departamento),
          cargo: Number(body.cargo),
          empresa: body.empresa,
          observacao: body.observacao,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    } catch (e) {
      console.log(e)
      throw error
    }
  }

  private async empresa(body) {
    try {
      const exist = await this.decisoresRepository.findOne({
        where: {
          email: body.email,
        },
      });

      if (exist) {
        await this.empresasRepository.update(exist.id, {
          nomeEmpresa: body.nomeEmpresa,
          nomeFantasia: body.nomeFantasia,
          documento: body.documento,
          codigoArea: body.codigoArea,
          telefone: body.telefone,
          site: body.site,
          cnae: Number(body.cnae) || null,
          setor: Number(body.setor) || null,
          filiais: body.filiais,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      } else {
        await this.empresasRepository.save({
          nomeEmpresa: body.nomeEmpresa,
          nomeFantasia: body.nomeFantasia,
          documento: body.documento,
          codigoArea: body.codigoArea,
          telefone: body.telefone,
          site: body.site,
          cnae: Number(body.cnae) || null,
          setor: Number(body.setor) || null,
          filiais: body.filiais,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    } catch (e) {
      console.log(e)
      throw error
    }
  }

  private async setor(body) {
    try {
      await this.setorRepository.save({
        nome: body.nome,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    } catch (e) {
      console.log(e)
      throw error
    }
  }

  private async cargo(body) {
    try {
      await this.cargoRepository.save({
        nome: body.nome,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    } catch (e) {
      console.log(e)
      throw error
    }
  }

  private async departamento(body) {
    try {
      await this.departamentoRepository.save({
        nome: body.nome,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    } catch (e) {
      console.log(e)
      throw error
    }
  }

  private async cnae(body) {
    try {
      await this.cnaeRepository.save({
        nome: body.nome,
        codgio: body.codigo,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    } catch (e) {
      console.log(e)
      throw error
    }
  }

  execute(name: any, file: any) {
    const listCSV = [];
    createReadStream(file.path)
      .pipe(csv())
      .on('data', (data) => listCSV.push(data))
      .on('end', async () => {
        listCSV.map(async (body) => {
          if (name === 'decisores') {
            this.decisores(body)
          } else if (name === 'empresa') {
            this.empresa(body)
          } else if (name === 'setor') {
            this.setor(body)
          } else if (name === 'cargo') {
            this.cargo(body)
          } else if (name === 'departamento') {
            this.departamento(body)
          } else if (name === 'cnae') {
            this.cnae(body)
          }
        })
      });
  }
}
