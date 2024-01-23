"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const data_source_1 = require("./db/data-source");
const departamento_module_1 = require("./departamento/departamento.module");
const setor_module_1 = require("./setor/setor.module");
const cargo_module_1 = require("./cargo/cargo.module");
const cnae_module_1 = require("./cnae/cnae.module");
const decisores_module_1 = require("./decisores/decisores.module");
const empresa_module_1 = require("./empresa/empresa.module");
const import_or_export_module_1 = require("./import-or-export/import-or-export.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(data_source_1.dataSourceOptions),
            users_module_1.UsersModule,
            departamento_module_1.DepartamentoModule,
            setor_module_1.SetorModule,
            cargo_module_1.CargoModule,
            cnae_module_1.CnaeModule,
            decisores_module_1.DecisoresModule,
            empresa_module_1.EmpresaModule,
            import_or_export_module_1.ImportOrExportModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map