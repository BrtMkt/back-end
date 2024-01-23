import { Injectable } from '@nestjs/common';
import { UpdateDecisoreDto } from './dto/update-decisore.dto';
import { Decisores } from './entities/decisore.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DecisoresService {
  constructor(
    @InjectRepository(Decisores)
    private readonly decisoresRepository: Repository<Decisores>,
  ) { }

  findAll() {
    return this.decisoresRepository.createQueryBuilder('decisores').innerJoinAndSelect( 'decisores.cargo', 'cargo', 'cargo.id = decisores.cargo' ).innerJoinAndSelect( 'decisores.departamento', 'departamento', 'departamento.id = decisores.departamento' ).innerJoinAndSelect( 'decisores.empresa', 'empresa', 'empresa.id = decisores.empresa' ).getMany()
  }

  async buscar(body) {
    delete body['']
    const response =  this.decisoresRepository.createQueryBuilder('decisores').innerJoinAndSelect( 'decisores.cargo', 'cargo', 'cargo.id = decisores.cargo' ).innerJoinAndSelect( 'decisores.departamento', 'departamento', 'departamento.id = decisores.departamento' ).innerJoinAndSelect( 'decisores.empresa', 'empresa', 'empresa.id = decisores.empresa' )
    if(body.departamento || body.cargo || body.empresa){
      if(body.departamento){
        response.where('departamento.nome = :name', { name: body.departamento })
        delete body.departamento
      }else if(body.cargo){
        response.where('cargo.nome = :name', { name: body.cargo })
        delete body.cargo
      }else if(body.empresa){
        response.where('empresa.nomeEmpresa = :name', { name: body.empresa })
        delete body.empresa
      }
    }
    if(body){
      response.andWhere(body)
    }
    return response.getMany()
  }

  findOne(id: number) {
    return this.decisoresRepository.createQueryBuilder('decisores').innerJoinAndSelect( 'decisores.cargo', 'cargo', 'cargo.id = decisores.cargo' ).innerJoinAndSelect( 'decisores.departamento', 'departamento', 'departamento.id = decisores.departamento' ).innerJoinAndSelect( 'decisores.empresa', 'empresa', 'empresa.id = decisores.empresa' ).where("decisores.id = :id", { id: id }).getOne()
  }

  update(id: number, updateDecisoreDto: UpdateDecisoreDto) {
    return this.decisoresRepository.update(id, updateDecisoreDto);
  }

  remove(id: number) {
    return this.decisoresRepository.delete(id);
  }
}
