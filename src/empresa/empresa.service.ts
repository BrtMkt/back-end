import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empresa } from './entities/empresa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) { }

  findAll() {
    return this.empresaRepository.createQueryBuilder('empresa').innerJoinAndSelect( 'empresa.setor', 'setor', 'setor.id = empresa.setor' ).innerJoinAndSelect( 'empresa.cnae', 'cnae', 'cnae.id = empresa.cnae' ).getMany()
  }

  async buscar(body) {
    delete body['']
    const response =  this.empresaRepository.createQueryBuilder('empresa').innerJoinAndSelect( 'empresa.setor', 'setor', 'setor.id = empresa.setor' ).innerJoinAndSelect( 'empresa.cnae', 'cnae', 'cnae.id = empresa.cnae' )
    if(body.cnae || body.setor){
      if(body.cnae){
        response.where('cnae.nome = :name', { name: body.cnae })
        delete body.cnae
      }else if(body.setor){
        response.where('setor.nome = :name', { name: body.setor })
        delete body.setor
      }
    }
    if(body){
      response.andWhere(body)
    }
    return response.getMany()
  }



  findOne(id: number) {
    return this.empresaRepository.createQueryBuilder('empresa').innerJoinAndSelect( 'empresa.setor', 'setor', 'setor.id = empresa.setor' ).innerJoinAndSelect( 'empresa.cnae', 'cnae', 'cnae.id = empresa.cnae' ).where("decisores.id = :id", { id: id }).getMany()
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaRepository.update(id, updateEmpresaDto);
  }

  remove(id: number) {
    return this.empresaRepository.delete(id);
  }
}
