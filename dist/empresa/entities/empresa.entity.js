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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
const cnae_entity_1 = require("../../cnae/entities/cnae.entity");
const setor_entity_1 = require("../../setor/entities/setor.entity");
const typeorm_1 = require("typeorm");
let Empresa = class Empresa {
};
exports.Empresa = Empresa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Empresa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empresa.prototype, "nomeEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empresa.prototype, "nomeFantasia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empresa.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empresa.prototype, "codigoArea", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empresa.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empresa.prototype, "site", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => setor_entity_1.Setor, (sectorId) => sectorId.empresa),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Empresa.prototype, "setor", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cnae_entity_1.Cnae, (cnaeId) => cnaeId.empresa),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Empresa.prototype, "cnae", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Empresa.prototype, "filiais", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Empresa.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Empresa.prototype, "updatedAt", void 0);
exports.Empresa = Empresa = __decorate([
    (0, typeorm_1.Entity)()
], Empresa);
//# sourceMappingURL=empresa.entity.js.map