# Postgraphile Demo

## Running

`docker-compose up -d`

## Rebuilding

`docker-compose up --build -d [<service_name>..]`

## Apps

[pgAdmin](http://localhost:5000)

username: admin@admin.com
password: root

[GraphiQL](http://localhost:3000/graphiql)

[GraphQL Endpoint](http://localhost:3000/graphql)

## Data

A database called `postgres` comes pre-seeded with data copied from [this repo](https://github.com/graphile/postgraphile/tree/v4/examples/forum).

Databases can be managed through [pgAdmin](http://localhost:5000).
