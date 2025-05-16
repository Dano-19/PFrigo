import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('reporte')
export class Reporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  direccion: string;

  @Column()
  descripcion: string;

  @CreateDateColumn()
  creado_en: Date;
}
