# Home Air Quality Tracker Backend

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

Welcome to the backend part of the Home Air Quality Tracker application. This backend service is built using NestJS and utilizes a PostgreSQL database, offering a robust and scalable solution for handling data related to air quality monitoring in your home. It supports the frontend React application by providing APIs for real-time and historical data on air quality in various rooms.

## Features

- **NestJS Backend**: A well-structured and scalable server-side application written in NestJS.
- **PostgreSQL Database**: Reliable and efficient data storage with PostgreSQL.
- **API Endpoints**: Provides endpoints for fetching real-time and historical air quality data.
- **Secure Authentication**: Ensures secure access to the backend services.

## API Access

The backend is hosted on Render, offering a reliable and efficient hosting service. Access the API at: [https://home-station.onrender.com](https://home-station.onrender.com)

## Getting Started

To set up the backend service locally, follow these steps.

### Prerequisites

- Install [Node.js](https://nodejs.org/en/)
- Install PostgreSQL database

### Installation

1. Clone the backend repository (repository link to be provided by the user).
   ```sh
   git clone [backend-repo-link]
   ```
2. Navigate to the backend project directory.
   ```sh
   cd [backend-project-directory]
   ```
3. Install NPM packages.
   ```sh
   npm install
   ```
4. Set up your PostgreSQL database and update the `.env` file with your database credentials.

5. Start the backend service.
   ```sh
   npm run start
   ```

## Usage

After setting up, the backend will serve requests from the frontend application, providing real-time and historical data for air quality monitoring.

[//]: # (## Roadmap)

[//]: # (## Contributing)

## Contact

Filip Tomanec - tomanec.f@gmail.com

Backend Repository: https://github.com/filiptomanec/home-air-station-BE
Frontend Repository: https://github.com/filiptomanec/home-air-station

## Acknowledgements

- [NestJS](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Render](https://render.com/)