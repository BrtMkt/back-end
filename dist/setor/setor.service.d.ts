import { UpdateSetorDto } from './dto/update-setor.dto';
import { Setor } from './entities/setor.entity';
import { Repository } from 'typeorm';
export declare class SetorService {
    private readonly setorRepository;
    constructor(setorRepository: Repository<Setor>);
    findAll(): Promise<Setor[]>;
    buscar(body: any): Promise<Setor[]>;
    update(id: number, updateSetorDto: UpdateSetorDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
