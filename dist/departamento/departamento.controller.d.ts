import { DepartamentoService } from './departamento.service';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
export declare class DepartamentoController {
    private readonly departamentoService;
    constructor(departamentoService: DepartamentoService);
    findAll(): Promise<import("./entities/departamento.entity").Departamento[]>;
    buscar(body: string): Promise<import("./entities/departamento.entity").Departamento[]>;
    update(id: string, updateDepartamentoDto: UpdateDepartamentoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
