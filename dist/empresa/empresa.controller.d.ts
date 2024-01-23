import { EmpresaService } from './empresa.service';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
export declare class EmpresaController {
    private readonly empresaService;
    constructor(empresaService: EmpresaService);
    findAll(): Promise<import("./entities/empresa.entity").Empresa[]>;
    findOne(id: string): Promise<import("./entities/empresa.entity").Empresa[]>;
    buscar(body: string): Promise<import("./entities/empresa.entity").Empresa[]>;
    update(id: string, updateEmpresaDto: UpdateEmpresaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
