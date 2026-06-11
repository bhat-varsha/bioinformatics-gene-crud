# Bioinformatics gene management system :

A CRUD (Create, Read, Update, Delete) web application for managing gene records using Node.js, Express.js, SQLite, HTML, and JavaScript.

## Features

* Add a new gene
* View all genes
* Update existing gene information
* Delete genes
* Store gene records in SQLite database
* RESTful API implementation

## Tech Stack

### Frontend

* HTML
* JavaScript
* Fetch API

### Backend

* Node.js
* Express.js

### Database

* SQLite3

## Project Structure

```
bioinfomratics-gene-crud/
│
├── public/
│   └── index.html
│
├── database.js
├── server.js
├── genes.db
├── package.json
└── README.md
```

## API Endpoints

### Create Gene

```
POST /genes
```

### Get All Genes

```
GET /genes
```

### Update Gene

```
PUT /genes/:id
```

### Delete Gene

```
DELETE /genes/:id
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd bioinformatics-gene-crud
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
node server.js
```

Open:

```
http://localhost:3000
```

## Database Schema

### genes

| Column    | Type    |
| --------- | ------- |
| id        | INTEGER |
| gene_name | TEXT    |
| sequence  | TEXT    |

## Learning Concepts Demonstrated

* REST APIs
* CRUD Operations
* Express Routing
* SQLite Integration
* JSON Handling
* Frontend–Backend Communication
* Fetch API
* Node.js Modules

## Author

Varsha
