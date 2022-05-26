## Fastify Swagger API

A Complete REST API using Fastify and Swagger with Mongoose Database

## Getting Started

Follow the instruction below to setup the API project:

1. Run command `npm install` to install latest dependencies.

2. Run command `npm run start` server starts at localhost:3000/

`Note`: If fastify is not installed do this:

For NPM
```
npm i fastify --save
```

For Yarn

```
yarn add fastify
```


## Example Route Requests

```js
method: 'GET',
url: '/api/users'
```
```js
method: 'GET',
url: '/api/users/:id',
```
```js
method: 'POST',
url: '/api/users',
Request:{
    "firstname": "Robert",
    "lastname": "Hans",
    "email": "robhans@outlook.com",
    "age": 32,
    "addresses": {
        "address1": "Lorem ipsum dolor amet si."
    }
},
Response: {
	"_id": "628f96a8789e7e162caf3b30",
    "firstname": "John",
    "lastname": "Smith",
    "email": "john_smith@outlook.com",
    "age": 43,
    "addresses": {
        "address1": "Lorem ipsum dolor amet si.",
        "address2": "Lorem ipsum dolor amet si."
    }
}
```
```js
method: 'PUT',
url: '/api/users/628f96a8789e7e162caf3b30',
Request: {
    "firstname": "Robert",
    "lastname": "Lee",
    "email": "robhans@outlook.com",
    "age": 33,
    "addresses": {
        "address1": "Lorem ipsum dolor amet si."
        "address2": "Lorem ipsum dolor amet si."
        "address3": "Lorem ipsum dolor amet si."
    }
},
Response: {
    "_id": "628f96a8789e7e162caf3b30",
    "firstname": "Robert",
    "lastname": "Lee",
    "email": "robhans@outlook.com",
    "age": 33,
    "addresses": {
        "address1": "Lorem ipsum dolor amet si."
        "address2": "Lorem ipsum dolor amet si."
        "address3": "Lorem ipsum dolor amet si."
    },
    "__v": 0
}

```

```js
method: 'DELETE',
url: '/api/users/628f96a8789e7e162caf3b30',
```

Additional reference for Fastify Documentation https://www.fastify.io/docs/latest/Guides/Serverless/#lambdajs