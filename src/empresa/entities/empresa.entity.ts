import { Cnae } from 'src/cnae/entities/cnae.entity';
import { Setor } from 'src/setor/entities/setor.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
  } from 'typeorm';
  
  @Entity()
  export class Empresa {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nomeEmpresa: string;
  
    @Column()
    nomeFantasia: string;
  
    @Column()
    documento: string;
  
    @Column()
    codigoArea: string;
  
    @Column()
    telefone: string;

    @Column()
    site: string;
  
    @OneToOne(() => Setor, (sectorId: any) => sectorId.empresa)
    @JoinColumn()
    setor: number;
  
    @OneToOne(() => Cnae, (cnaeId: any) => cnaeId.empresa)
    @JoinColumn()
    cnae: number;
  
    @Column()
    filiais: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }