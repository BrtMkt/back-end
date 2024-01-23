
import { Cargo } from 'src/cargo/entities/cargo.entity';
import { Cnae } from 'src/cnae/entities/cnae.entity';
import { Decisores } from 'src/decisores/entities/decisore.entity';
import { Departamento } from 'src/departamento/entities/departamento.entity';
import { Empresa } from 'src/empresa/entities/empresa.entity';
import { Setor } from 'src/setor/entities/setor.entity';
import { User } from 'src/users/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'mysql.systembrutamarketing.com.br',
  port: 3306,
  username: 'systembrutamar',
  password: 'Bruta2023',
  database: 'systembrutamar',
  synchronize: true,
  logging: false,
  entities: [User, Departamento, Setor, Cargo, Cnae, Empresa, Decisores],
  subscribers: [],
  migrations: [],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;