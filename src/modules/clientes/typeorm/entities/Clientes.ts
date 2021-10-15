import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 50 })
  nome: string;

  @Column({ length: 50 })
  endereco: string;

  @Column({ length: 50 })
  cidade: string;

  @Column({ length: 2 })
  estado: string;

  @Column({ length: 20 })
  telefone: string;
}
