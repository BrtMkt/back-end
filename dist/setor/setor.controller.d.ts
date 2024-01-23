import { SetorService } from './setor.service';
import { UpdateSetorDto } from './dto/update-setor.dto';
export declare class SetorController {
    private readonly setorService;
    constructor(setorService: SetorService);
    findAll(): Promise<import("./entities/setor.entity").Setor[]>;
    buscar(body: string): Promise<import("./entities/setor.entity").Setor[]>;
    update(id: string, updateSetorDto: UpdateSetorDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
