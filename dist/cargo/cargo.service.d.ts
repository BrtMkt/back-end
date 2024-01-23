import { UpdateCargoDto } from './dto/update-cargo.dto';
import { Cargo } from './entities/cargo.entity';
import { Repository } from 'typeorm';
export declare class CargoService {
    private readonly cargoRepository;
    constructor(cargoRepository: Repository<Cargo>);
    findAll(): Promise<Cargo[]>;
    buscar(body: any): Promise<Cargo[]>;
    update(id: number, updateCargoDto: UpdateCargoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
