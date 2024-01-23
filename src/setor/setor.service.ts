import { Injectable } from '@nestjs/common';
import { CreateSetorDto } from './dto/create-setor.dto';
import { UpdateSetorDto } from './dto/update-setor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Setor } from './entities/setor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SetorService {
  constructor(
    @InjectRepository(Setor)
    private readonly setorRepository: Repository<Setor>,
  ) { }

  findAll() {
    return this.setorRepository.find();
  }

  buscar(body) {
    delete body['']
    return this.setorRepository.findBy(body)
  }

  update(id: number, updateSetorDto: UpdateSetorDto) {
    return this.setorRepository.update(id, updateSetorDto);
  }

  remove(id: number) {
    return this.setorRepository.delete(id);
  }
}
