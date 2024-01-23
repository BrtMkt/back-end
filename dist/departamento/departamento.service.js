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
exports.DepartamentoService = void 0;
const common_1 = require("@nestjs/common");
const departamento_entity_1 = require("./entities/departamento.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let DepartamentoService = class DepartamentoService {
    constructor(departamentoRepository) {
        this.departamentoRepository = departamentoRepository;
    }
    findAll() {
        return this.departamentoRepository.find();
    }
    buscar(body) {
        delete body[''];
        return this.departamentoRepository.findBy(body);
    }
    update(id, updateDepartamentoDto) {
        return this.departamentoRepository.update(id, updateDepartamentoDto);
    }
    remove(id) {
        return this.departamentoRepository.delete(id);
    }
};
exports.DepartamentoService = DepartamentoService;
exports.DepartamentoService = DepartamentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(departamento_entity_1.Departamento)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DepartamentoService);
//# sourceMappingURL=departamento.service.js.map