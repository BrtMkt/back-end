import { Injectable } from '@nestjs/common';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { Cargo } from './entities/cargo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CargoService {
  constructor(
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>,
  ) { }

  findAll() {
    return this.cargoRepository.find();
  }

  buscar(body) {
    delete body['']
    return this.cargoRepository.findBy(body)
  }

  update(id: number, updateCargoDto: UpdateCargoDto) {
    return this.cargoRepository.update(id, updateCargoDto);
  }

  remove(id: number) {
    return this.cargoRepository.delete(id);
  }
}
