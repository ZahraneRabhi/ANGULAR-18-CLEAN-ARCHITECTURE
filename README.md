# Angular Clean Architecture

<div align="center">
  <img src="public/angular-logo.png" alt="Angular Logo" width="60%"/>
</div>

This project is a sample Angular application following a clean and scalable architecture. The structure is designed to be modular and maintainable(for me at least) and most importantly scalable.

## Features
- **JWT Authentication**: Implements [JSON Web Token (JWT)](https://jwt.io/introduction)  for secure Token-Based user authentication. 
- **Tailwind CSS**: Utilizes [Tailwind CSS](https://tailwindcss.com/) for styling.

## Project Structure

The project is organized into several key directories:

  - **`auth`**: Handles authentication-related features.
    - **`components`**: Contains components related to authentication (login, register, etc.).
    - **`models`**: Contains models used in authentication.
    - **`services`**: Contains services related to authentication.
  - **`core`**: Contains core functionality and services used application-wide.
    - **`guards`**: Authentication and route guards.
    - **`interceptors`**: HTTP interceptors for handling requests and responses with Tokens.
    - **`services`**: Core services used throughout the application.
  - **`features`**: Contains feature modules for different parts of the application.
    - **`home`**: The home feature module.
    - **`other`**: Another feature module.
  - **`shared`**: Contains shared components and models used across multiple parts of the application.
    - **`components`**: Shared UI components (e.g., header, footer, not-found).
    - **`models`**: Shared models.
  - **`app-routing.module.ts`**: Application-wide routing configuration.
  - **`app.component.ts`**: The root component of the application.
  - **`app.module.ts`**: The root module of the application.


# Project Layout
```Bash
src/
└── app/
    ├── auth/
    │   ├── components/
    │   │   ├── login/
    │   │   └── register/
    │   ├── models/
    │   └── services/
    ├── core/
    │   ├── guards/
    │   ├── interceptors/
    │   └── services/
    ├── features/
    │   ├── home/
    │   │   └── components/
    │   │       └── hero/
    │   └── other/
    │       └── components/
    │           └── other/
    ├── shared/
    │   ├── components/
    │   │   ├── footer/
    │   │   ├── header/
    │   │   └── not-found/
    │   └── models/
    ├── app-routing.module.ts
    ├── app.component.html
    ├── app.component.ts
    ├── app.module.ts
    └── main.ts
```
# Configuration 
- **<font color='green'>JWT Authentication: </font>**
  The application uses JSON Web Token (JWT) for authentication. Ensure to configure your backend API to handle JWT and update the `src\environments\environment.development.ts` with the correct endpoint of your Backend Server.

- **<font color='green'>Tailwind CSS: </font>**
  Tailwind CSS is used for styling the application. The configuration is located in the `tailwind.config.js` file. you can follow this [official Angular guide](https://tailwindcss.com/docs/guides/angular), but it should be straight forward as Tailwind is coded roughly the same for every Framework


# Architecture Overview
- **<font color='red'>Core Module (core): </font>** Provides application-wide services, guards, and interceptors.
- **<font color='red'>Auth Module (auth): </font>** Manages authentication-related components, models, and services.
- **<font color='red'>Features Modules (features): </font>** Contains feature-specific modules and components. Each feature module is lazy-loaded to optimize performance.
- **<font color='red'>Shared Module (shared): </font>** Holds shared components and models that are used across the application.
## Installation

To set up the project locally, follow these steps:

1. **<font color='blue'>Clone the repository: </font>** 
```bash
   git clone https://github.com/ZahraneRabhi/ANGULAR-18-CLEAN-ARCHITECTURE.
   cd ANGULAR-18-CLEAN-ARCHITECTURE
```

2. **<font color='blue'>Install The Dependencies: </font>** 
```bash
   yarn install
```
2. **<font color='blue'>Run the Client: </font>** 
```bash
   yarn start
```
# Notes
The noticeable issue is that the UI being too basic for a tailwind-based Application, but thats not really what i'm tryna achieve with this repository. 
  