# Product - Microservices

Microservice responsible for listing discounted products via gRPC [discount microservice](https://github.com/yagoluiz/discount-microservices).

## Data information

Data is stored in Postgres database. The scripts for table generation and initial data are present in the **sql folder**.

## Instructions for run project

For run project and integration testing, the database and discount service must be run.

### npm/nodemon

* Run application:

`npm start`

or

`nodemon .\bin\server.js`

* Test application:

`npm test`

### Container

* Docker:

`docker build -t product-microservices .`

Run project [discount microservice](https://github.com/yagoluiz/discount-microservices):

`docker build -t discount-microservices .`

* Docker compose:

`docker-compose up -d .`

### Endpoint

*http://localhost:3000/api/v1/products* **(GET)**