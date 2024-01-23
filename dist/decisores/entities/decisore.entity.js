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
exports.Decisores = void 0;
const typeorm_1 = require("typeorm");
const cargo_entity_1 = require("../../cargo/entities/cargo.entity");
const departamento_entity_1 = require("../../departamento/entities/departamento.entity");
const empresa_entity_1 = require("../../empresa/entities/empresa.entity");
let Decisores = class Decisores {
};
exports.Decisores = Decisores;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Decisores.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Decisores.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Decisores.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Decisores.prototype, "codigoArea", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Decisores.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cargo_entity_1.Cargo, (cargo) => cargo.decisores),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Decisores.prototype, "cargo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => departamento_entity_1.Departamento, (departamento) => departamento.decisores),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Decisores.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.decisores),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Decisores.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Decisores.prototype, "linkedin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Decisores.prototype, "observacao", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Decisores.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Decisores.prototype, "updatedAt", void 0);
exports.Decisores = Decisores = __decorate([
    (0, typeorm_1.Entity)()
], Decisores);
//# sourceMappingURL=decisore.entity.js.map