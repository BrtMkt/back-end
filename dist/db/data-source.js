"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const cargo_entity_1 = require("../cargo/entities/cargo.entity");
const cnae_entity_1 = require("../cnae/entities/cnae.entity");
const decisore_entity_1 = require("../decisores/entities/decisore.entity");
const departamento_entity_1 = require("../departamento/entities/departamento.entity");
const empresa_entity_1 = require("../empresa/entities/empresa.entity");
const setor_entity_1 = require("../setor/entities/setor.entity");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'mysql',
    host: 'mysql.systembrutamarketing.com.br',
    port: 3306,
    username: 'systembrutamar',
    password: 'Bruta2023',
    database: 'systembrutamar',
    synchronize: true,
    logging: false,
    entities: [user_entity_1.User, departamento_entity_1.Departamento, setor_entity_1.Setor, cargo_entity_1.Cargo, cnae_entity_1.Cnae, empresa_entity_1.Empresa, decisore_entity_1.Decisores],
    subscribers: [],
    migrations: [],
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map