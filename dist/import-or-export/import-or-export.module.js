"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportOrExportModule = void 0;
const common_1 = require("@nestjs/common");
const import_or_export_service_1 = require("./import-or-export.service");
const import_or_export_controller_1 = require("./import-or-export.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cargo_entity_1 = require("../cargo/entities/cargo.entity");
const setor_entity_1 = require("../setor/entities/setor.entity");
const decisore_entity_1 = require("../decisores/entities/decisore.entity");
const departamento_entity_1 = require("../departamento/entities/departamento.entity");
const cnae_entity_1 = require("../cnae/entities/cnae.entity");
const empresa_entity_1 = require("../empresa/entities/empresa.entity");
let ImportOrExportModule = class ImportOrExportModule {
};
exports.ImportOrExportModule = ImportOrExportModule;
exports.ImportOrExportModule = ImportOrExportModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([empresa_entity_1.Empresa, cargo_entity_1.Cargo, setor_entity_1.Setor, decisore_entity_1.Decisores, departamento_entity_1.Departamento, cnae_entity_1.Cnae])],
        controllers: [import_or_export_controller_1.ImportOrExportController],
        providers: [import_or_export_service_1.ImportOrExportService],
    })
], ImportOrExportModule);
//# sourceMappingURL=import-or-export.module.js.map