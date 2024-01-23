import { Injectable } from '@nestjs/common';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { Departamento } from './entities/departamento.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
  ) { }

  findAll() {
    return this.departamentoRepository.find();
  }

  buscar(body) {
    delete body['']
    return this.departamentoRepository.findBy(body)
  }

  update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    return this.departamentoRepository.update(id, updateDepartamentoDto);
  }

  remove(id: number) {
    return this.departamentoRepository.delete(id);
  }
}
