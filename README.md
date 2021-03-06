# Project3 - API App - Back end Application

This repository keeps the API application to perform all CRUD and Authentication operations for Project3 - API.

## API Characteristics

* Stack used: Node, Express, Mongoose, Bcrypt, Yup, JsonWebToken, Eslint, Babel, 
* Requests implemented: GET, POST, PUT, DELETE
* Public Routes: "/api/auth/register", "/api/auth/login"
* Private Routes:
  * "/api/pet" (GET, POST), "/api/pet/{petId} (GET, PUT, DELETE)"
 

## API Documentation

* Endpoints Description:

|   Route      |  HTTP Verb     |  Description  |  Body Request |  Example Response |  Status Code |
| :---         | :---           | :---          | :---          | :---              | :---         |
| /api/auth/register |   POST     | Register a new user based in informed params  |  ````{"name":"John Doe","email":"john@doe.com","password":"123456"}```` | ````{"_id":15,"name":"John Doe","email":"john@doe.com"}``` | 201 |
| /api/auth/login   |     POST     | Authenticates an user based on informed credentials, returning a JWT token  | ````{"email":"john@doe.com","password":"123456"}```` | ````{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzA4Njk2NzIsImlzcyI6IjE1In0.ZrpH4tzt2qdDtTFynj3ez2rIl8KM9cvmkI5AO1JOKps","role":"User"}```` | 200 |
| /api/pet  |   GET   | Retrieves a list of pets created by token owner. Can filter results by name param | N/A | ````[{"_id":"619d47d7019101e90cca69a2","title":"Dog 1","description":"Description Dog 1","owner":"6197f5cd6dc9fbeac71d55d1","createdAt":"2021-11-23T19:58:15.274Z","updatedAt":"2021-11-23T19:58:15.274Z","__v":0}]```` | 200 |
| /api/pet/{petId}  |   GET   | Retrieves a pet by Id passed as URL param  | N/A | ````{"_id":"619d47d7019101e90cca69a2","name":"Dog 1","description":"Description Dog 1","owner":"6197f5cd6dc9fbeac71d55d1","createdAt":"2021-11-23T19:58:15.274Z","updatedAt":"2021-11-23T19:58:15.274Z","__v":0}```` | 200 |
| /api/pet  |   POST   | Create a new pet based on informed params | ````{"name":"Dog 1","description":"Description of Dog 1"}```` | ````{"_id":"619d47d7019101e90cca69a2","name":"Dog 1","description":"Description Dog 1","owner":"6197f5cd6dc9fbeac71d55d1","createdAt":"2021-11-23T19:58:15.274Z","updatedAt":"2021-11-23T19:58:15.274Z","__v":0}```` | 201 |
| /api/pet/{petId}  |   PUT   | Edits an specific pet by Id passed as URL param | ````{"name":"Dog 1 edited","description":"Description of Dog 1 edited"}```` | ````{"_id":"619d47d7019101e90cca69a2","name":"Dog 1 edited","description":"Description Dog 1 edited","owner":"6197f5cd6dc9fbeac71d55d1","createdAt":"2021-11-23T19:58:15.274Z","updatedAt":"2021-11-23T19:59:15.274Z","__v":0}```` | 200 |
| /api/pet/{petId}  |   DELETE   | Deletes an specific pet by Id passed as URL param | N/A | N/A | 204 |


## Running Locally

To run this API locally, please follow the below steps:

* You should have installed MongoDb Community Edition database in your machine. You may install it by following the steps inside the [official MongoDb documentation](https://docs.mongodb.com/manual/administration/install-community/)
* Clone this repository using with **git clone** command in your Terminal
* Create a .env file in the root path of this project and add the following variables:
````text
PORT=5050
MONGODB_URI=mongodb://localhost:27017/projety-api
LOGIN_TOKEN_SECRET=<ADD_YOUR_TOKEN_SECRET_HERE>
LOGIN_TOKEN_EXPIRATION=<ADD_YOUR_TOKEN_EXPIRATION_PERIOD_HERE>
````
* Install dependencies by running `npm install` command:
* Run project with `npm run dev`, and it will be available the PORT defined inside you .env file

## Authors & Version Control

API developed by **Elaine Brito - (https://github.com/Elainebritodev)** - *Project3 - API App Version 1.0* - **Published in Dec-10th of 2021**