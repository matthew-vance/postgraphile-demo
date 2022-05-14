# Postgraphile Demo

## Running

`docker-compose up -d --build`

## URLs

[pgAdmin](http://localhost:5000)

[GraphiQL](http://localhost:3000/graphiql)

[GraphQL Endpoint](http://localhost:3000/graphql)

## Seeding

Seed the `postgres` database by running the `./data/schema.sql` script followed by `./data/data.sql`. This can be done using pgAdmin.

Seed data copied from [this repo](https://github.com/graphile/postgraphile/tree/v4/examples/forum).
