import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';
import { Repository } from 'typeorm';
export declare class EmpresaService {
    private readonly empresaRepository;
    constructor(empresaRepository: Repository<Empresa>);
    findAll(): Promise<Empresa[]>;
    buscar(body: any): Promise<Empresa[]>;
    findOne(id: number): Promise<Empresa[]>;
    update(id: number, updateEmpresaDto: UpdateEmpresaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
