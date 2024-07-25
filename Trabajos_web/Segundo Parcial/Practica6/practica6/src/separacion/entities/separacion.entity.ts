
import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import { Cancha } from 'src/cancha/entities/cancha.entity';
import { Deportista } from 'src/deportista/entities/deportista.entity';

@Entity()
export class Separacion {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Fecha_de_separacion: String;

    @Column()
    Hora_desde: String;

    @Column()
    Hora_hasta: String;

    @OneToMany(() => Cancha, cancha => cancha.separaciones)
    cancha: Cancha;

    @OneToMany(() => Deportista, deportista => deportista.separaciones) 
    deportista: Deportista;
}
