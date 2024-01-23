import { DecisoresService } from './decisores.service';
import { UpdateDecisoreDto } from './dto/update-decisore.dto';
export declare class DecisoresController {
    private readonly decisoresService;
    constructor(decisoresService: DecisoresService);
    findAll(): Promise<import("./entities/decisore.entity").Decisores[]>;
    findOne(id: string): Promise<import("./entities/decisore.entity").Decisores>;
    buscar(body: string): Promise<import("./entities/decisore.entity").Decisores[]>;
    update(id: string, updateDecisoreDto: UpdateDecisoreDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
