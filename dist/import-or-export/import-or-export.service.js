"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportOrExportService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const csv = require("csv-parser");
const decisore_entity_1 = require("../decisores/entities/decisore.entity");
const empresa_entity_1 = require("../empresa/entities/empresa.entity");
const setor_entity_1 = require("../setor/entities/setor.entity");
const cargo_entity_1 = require("../cargo/entities/cargo.entity");
const departamento_entity_1 = require("../departamento/entities/departamento.entity");
const cnae_entity_1 = require("../cnae/entities/cnae.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const console_1 = require("console");
let ImportOrExportService = class ImportOrExportService {
    constructor(decisoresRepository, empresasRepository, setorRepository, cargoRepository, departamentoRepository, cnaeRepository) {
        this.decisoresRepository = decisoresRepository;
        this.empresasRepository = empresasRepository;
        this.setorRepository = setorRepository;
        this.cargoRepository = cargoRepository;
        this.departamentoRepository = departamentoRepository;
        this.cnaeRepository = cnaeRepository;
    }
    async decisores(body) {
        try {
            const decisionExist = await this.decisoresRepository.findOne({
                where: {
                    email: body.email,
                },
            });
            const company = await this.empresasRepository.findOne({
                where: { documento: body.documento },
            });
            if (decisionExist) {
                await this.decisoresRepository.update(decisionExist.id, {
                    nome: body.nome,
                    email: body.email,
                    codigoArea: body.codigoArea,
                    telefone: body.telefone,
                    linkedin: body.linkedin,
                    departamento: Number(body.departamento) || null,
                    cargo: Number(body.cargo) || null,
                    empresa: company.id,
                    observacao: body.observacao,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
            }
            else {
                await this.decisoresRepository.save({
                    nome: body.nome,
                    email: body.email,
                    codigoArea: body.codigoArea,
                    telefone: body.telefone,
                    linkedin: body.linkedin,
                    departamento: Number(body.departamento),
                    cargo: Number(body.cargo),
                    empresa: body.empresa,
                    observacao: body.observacao,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
            }
        }
        catch (e) {
            console.log(e);
            throw console_1.error;
        }
    }
    async empresa(body) {
        try {
            const exist = await this.decisoresRepository.findOne({
                where: {
                    email: body.email,
                },
            });
            if (exist) {
                await this.empresasRepository.update(exist.id, {
                    nomeEmpresa: body.nomeEmpresa,
                    nomeFantasia: body.nomeFantasia,
                    documento: body.documento,
                    codigoArea: body.codigoArea,
                    telefone: body.telefone,
                    site: body.site,
                    cnae: Number(body.cnae) || null,
                    setor: Number(body.setor) || null,
                    filiais: body.filiais,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
            }
            else {
                await this.empresasRepository.save({
                    nomeEmpresa: body.nomeEmpresa,
                    nomeFantasia: body.nomeFantasia,
                    documento: body.documento,
                    codigoArea: body.codigoArea,
                    telefone: body.telefone,
                    site: body.site,
                    cnae: Number(body.cnae) || null,
                    setor: Number(body.setor) || null,
                    filiais: body.filiais,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
            }
        }
        catch (e) {
            console.log(e);
            throw console_1.error;
        }
    }
    async setor(body) {
        try {
            await this.setorRepository.save({
                nome: body.nome,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }
        catch (e) {
            console.log(e);
            throw console_1.error;
        }
    }
    async cargo(body) {
        try {
            await this.cargoRepository.save({
                nome: body.nome,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }
        catch (e) {
            console.log(e);
            throw console_1.error;
        }
    }
    async departamento(body) {
        try {
            await this.departamentoRepository.save({
                nome: body.nome,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }
        catch (e) {
            console.log(e);
            throw console_1.error;
        }
    }
    async cnae(body) {
        try {
            await this.cnaeRepository.save({
                nome: body.nome,
                codgio: body.codigo,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }
        catch (e) {
            console.log(e);
            throw console_1.error;
        }
    }
    execute(name, file) {
        const listCSV = [];
        (0, fs_1.createReadStream)(file.path)
            .pipe(csv())
            .on('data', (data) => listCSV.push(data))
            .on('end', async () => {
            listCSV.map(async (body) => {
                if (name === 'decisores') {
                    this.decisores(body);
                }
                else if (name === 'empresa') {
                    this.empresa(body);
                }
                else if (name === 'setor') {
                    this.setor(body);
                }
                else if (name === 'cargo') {
                    this.cargo(body);
                }
                else if (name === 'departamento') {
                    this.departamento(body);
                }
                else if (name === 'cnae') {
                    this.cnae(body);
                }
            });
        });
    }
};
exports.ImportOrExportService = ImportOrExportService;
exports.ImportOrExportService = ImportOrExportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(decisore_entity_1.Decisores)),
    __param(1, (0, typeorm_1.InjectRepository)(empresa_entity_1.Empresa)),
    __param(2, (0, typeorm_1.InjectRepository)(setor_entity_1.Setor)),
    __param(3, (0, typeorm_1.InjectRepository)(cargo_entity_1.Cargo)),
    __param(4, (0, typeorm_1.InjectRepository)(departamento_entity_1.Departamento)),
    __param(5, (0, typeorm_1.InjectRepository)(cnae_entity_1.Cnae)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ImportOrExportService);
//# sourceMappingURL=import-or-export.service.js.map