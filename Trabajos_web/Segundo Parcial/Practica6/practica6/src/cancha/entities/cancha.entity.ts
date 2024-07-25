import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import { Separacion } from '../../separacion/entities/separacion.entity';
@Entity()
export class Cancha {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    Descripcion: string;
    
    @Column({ default: 'Activa' })
    Estado: string;
  
    @OneToMany(() => Separacion, separacion => separacion.cancha)
    separaciones: Separacion[];
}
