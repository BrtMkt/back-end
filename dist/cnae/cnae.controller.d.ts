import { CnaeService } from './cnae.service';
import { UpdateCnaeDto } from './dto/update-cnae.dto';
export declare class CnaeController {
    private readonly cnaeService;
    constructor(cnaeService: CnaeService);
    findAll(): Promise<import("./entities/cnae.entity").Cnae[]>;
    buscar(body: string): Promise<import("./entities/cnae.entity").Cnae[]>;
    update(id: string, updateCnaeDto: UpdateCnaeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
