import { Injectable } from '@nestjs/common';
import { UpdateCnaeDto } from './dto/update-cnae.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cnae } from './entities/cnae.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CnaeService {
  constructor(
    @InjectRepository(Cnae)
    private readonly cnaeRepository: Repository<Cnae>,
  ) { }

  findAll() {
    return this.cnaeRepository.find();
  }

  buscar(body) {
    delete body['']
    return this.cnaeRepository.findBy(body)
  }

  update(id: number, updateCnaeDto: UpdateCnaeDto) {
    return this.cnaeRepository.update(id, updateCnaeDto);
  }

  remove(id: number) {
    return this.cnaeRepository.delete(id);
  }
}
