import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Sensor} from "../../sensor/entities/sensor.entity";
import {IsNumber} from "class-validator";

@Entity()
export class Measurement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'decimal'})
    temperature: number;

    @Column({type: 'decimal'})
    humidity: number;

    @Column({type: 'integer'})
    co2: number;

    @CreateDateColumn({type: 'timestamptz'})
    timestamp: Date;

    @ManyToOne(() => Sensor)
    sensor: Sensor
}
