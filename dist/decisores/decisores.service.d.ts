import { UpdateDecisoreDto } from './dto/update-decisore.dto';
import { Decisores } from './entities/decisore.entity';
import { Repository } from 'typeorm';
export declare class DecisoresService {
    private readonly decisoresRepository;
    constructor(decisoresRepository: Repository<Decisores>);
    findAll(): Promise<Decisores[]>;
    buscar(body: any): Promise<Decisores[]>;
    findOne(id: number): Promise<Decisores>;
    update(id: number, updateDecisoreDto: UpdateDecisoreDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
