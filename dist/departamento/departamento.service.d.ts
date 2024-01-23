import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { Departamento } from './entities/departamento.entity';
import { Repository } from 'typeorm';
export declare class DepartamentoService {
    private readonly departamentoRepository;
    constructor(departamentoRepository: Repository<Departamento>);
    findAll(): Promise<Departamento[]>;
    buscar(body: any): Promise<Departamento[]>;
    update(id: number, updateDepartamentoDto: UpdateDepartamentoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
