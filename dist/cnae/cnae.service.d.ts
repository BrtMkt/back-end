import { UpdateCnaeDto } from './dto/update-cnae.dto';
import { Cnae } from './entities/cnae.entity';
import { Repository } from 'typeorm';
export declare class CnaeService {
    private readonly cnaeRepository;
    constructor(cnaeRepository: Repository<Cnae>);
    findAll(): Promise<Cnae[]>;
    buscar(body: any): Promise<Cnae[]>;
    update(id: number, updateCnaeDto: UpdateCnaeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
