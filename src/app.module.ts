import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import {User} from "./user/entities/user.entity";
import {Sensor} from "./sensor/entities/sensor.entity";
import {SensorModule} from "./sensor/sensor.module";
import { MeasurementModule } from './measurement/measurement.module';
import {Measurement} from "./measurement/entities/measurement.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            password: 'postgres',
            username: 'postgres',
            entities: [User, Sensor, Measurement],
            database: 'HomeStation',
            synchronize: true,
            logging: true,
        }),
        SensorModule,
        UserModule,
        MeasurementModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
