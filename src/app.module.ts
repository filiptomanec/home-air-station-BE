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
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('DB_HOST'),
                port: configService.get<number>('DB_PORT'),
                username: configService.get<string>('DB_USER'),
                password: configService.get<string>('DB_PASS'),
                database: configService.get<string>('DB_NAME'),
                entities: [User, Sensor, Measurement],
                synchronize: true,
                logging: true,
            }),
            inject: [ConfigService],
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
