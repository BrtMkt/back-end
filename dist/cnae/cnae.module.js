"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CnaeModule = void 0;
const common_1 = require("@nestjs/common");
const cnae_service_1 = require("./cnae.service");
const cnae_controller_1 = require("./cnae.controller");
const cnae_entity_1 = require("./entities/cnae.entity");
const typeorm_1 = require("@nestjs/typeorm");
let CnaeModule = class CnaeModule {
};
exports.CnaeModule = CnaeModule;
exports.CnaeModule = CnaeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cnae_entity_1.Cnae])],
        controllers: [cnae_controller_1.CnaeController],
        providers: [cnae_service_1.CnaeService],
    })
], CnaeModule);
//# sourceMappingURL=cnae.module.js.map