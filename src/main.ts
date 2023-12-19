import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Home Air Quality Tracker')
        .setDescription('This backend service is built using NestJS and utilizes a PostgreSQL database, offering a robust and scalable solution for handling data related to air quality monitoring in your home. It supports the frontend React application by providing APIs for real-time and historical data on air quality in various rooms.')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true}));

    await app.listen(3000);
}

bootstrap();
