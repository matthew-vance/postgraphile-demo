FROM postgres:alpine

WORKDIR /scripts

COPY ./init.sh /docker-entrypoint-initdb.d
COPY ./schema.sql ./data.sql ./

EXPOSE 5432