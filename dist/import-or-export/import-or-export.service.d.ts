import { Decisores } from 'src/decisores/entities/decisore.entity';
import { Empresa } from 'src/empresa/entities/empresa.entity';
import { Setor } from 'src/setor/entities/setor.entity';
import { Cargo } from 'src/cargo/entities/cargo.entity';
import { Departamento } from 'src/departamento/entities/departamento.entity';
import { Cnae } from 'src/cnae/entities/cnae.entity';
import { Repository } from 'typeorm';
export declare class ImportOrExportService {
    private readonly decisoresRepository;
    private readonly empresasRepository;
    private readonly setorRepository;
    private readonly cargoRepository;
    private readonly departamentoRepository;
    private readonly cnaeRepository;
    constructor(decisoresRepository: Repository<Decisores>, empresasRepository: Repository<Empresa>, setorRepository: Repository<Setor>, cargoRepository: Repository<Cargo>, departamentoRepository: Repository<Departamento>, cnaeRepository: Repository<Cnae>);
    private decisores;
    private empresa;
    private setor;
    private cargo;
    private departamento;
    private cnae;
    execute(name: any, file: any): void;
}
