import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import { Separacion } from '../../separacion/entities/separacion.entity';

@Entity()
export class Deportista {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    Nombre: string;
    
    @Column()
    identificacion: string;

    @Column()
    Equipo_que_representa: string;
    
    @OneToMany(() => Separacion, separacion => separacion.deportista)
    separaciones: Separacion[];
}
