import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
  } from 'typeorm';
import { Cargo } from 'src/cargo/entities/cargo.entity';
import { Departamento } from 'src/departamento/entities/departamento.entity';
import { Empresa } from 'src/empresa/entities/empresa.entity';
  
  @Entity()
  export class Decisores {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nome: string;
  
    @Column()
    email: string;
  
    @Column()
    codigoArea: string;
  
    @Column()
    telefone: string;
  
    @OneToOne(() => Cargo, (cargo: any) => cargo.decisores)
    @JoinColumn()
    cargo: number;
  
    @OneToOne(() => Departamento, (departamento: any) => departamento.decisores)
    @JoinColumn()
    departamento: number;
  
    @OneToOne(() => Empresa, (empresa: any) => empresa.decisores)
    @JoinColumn()
    empresa: number;
  
    @Column()
    linkedin: string;
  
    @Column()
    observacao: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }