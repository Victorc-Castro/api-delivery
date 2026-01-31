## 📦 Delivery API

[🇧🇷 Leia esta documentação em Português](./README.pt-BR.md)

This API was built to manage the delivery flow of orders, providing full control over users with different roles, orders, delivery statuses, and the movement history of each order.

The application works with two main user roles:

Seller: responsible for creating and sending orders to customers.

Customer: can view and track their own orders.

Each order belongs to a user and has a delivery status, such as:

processing

shipped

delivered

In addition, the API records every order movement (e.g., order left for delivery), ensuring full traceability throughout the delivery process.

## 👩‍💻 What I Learned

During the development of the Delivery API, several core concepts for building modern and scalable APIs were applied. The main learnings include:

--> 1. Access Control with User Roles
Implementation of user roles (seller and customer), defining specific permissions and access levels for each role within the application.

--> 2. Data Validation with Zod
Creation of validation schemas to ensure data consistency, security, and reliability across all API inputs.

--> 3. Data Modeling with Prisma ORM
Design of relational data models using PostgreSQL, including relationships between users, orders, and delivery movements.

--> 4. Delivery Status and Workflow Management
Implementation of the order lifecycle, from creation to final delivery, with strict state control and event history tracking.

--> 5. Automated Testing with Jest
Development of automated tests to validate business rules, increasing reliability and simplifying long-term maintenance.

--> 6. Containerized Environment with Docker
Database setup using Docker Compose, ensuring a standardized and reproducible development environment.

## 💻 Project Structure
API-DELIVERY

├── node_modules/            # Dependencies (ignored by Git)

├── prisma/                  # Prisma schema, migrations, and client

├── src/                     # Backend source code

├── .env                     # Environment variables (ignored by Git)

├── .env-example             # Environment variables example

├── .gitignore

├── README.md

├── README.pt-BR.md

├── docker-compose.yml       # PostgreSQL configuration with Docker

├── jest.config.js           # Jest configuration

├── package-lock.json

├── package.json

├── request_insomnia.yaml    # API request collection for testing

└── tsconfig.json            # TypeScript configuration

## 💾 Prerequisites

--> Node.js

--> npm or yarn

--> Docker & Docker Compose

--> Insomnia or Postman (to test the endpoints)

## 🚀 Running the Project

--> Clone the repository

--> Install the dependencies

--> Start the database using Docker

--> Run Prisma migrations

--> Start the server in development mode

The API will be available on the configured application port.

## 🧪 Automated Tests

This project uses Jest for automated testing.

--> Run tests in watch mode using the configured npm scripts.

## 🛠️ API Testing with Insomnia

--> Locate the request_insomnia.yaml file

--> Import it into Insomnia

--> All requests are preconfigured for the local API URL

This allows easy testing of flows such as:

user creation

authentication

orders

delivery status updates

delivery movements

## ⚙️ Technologies Used

--> Node.js

--> TypeScript

--> PostgreSQL

--> Prisma ORM

--> Zod

--> Docker & Docker Compose

--> Jest

--> Git & GitHub