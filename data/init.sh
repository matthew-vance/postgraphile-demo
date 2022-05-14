#!/bin/bash

psql -U $POSTGRES_USER -d $POSTGRES_DB -a -f /scripts/schema.sql
psql -U $POSTGRES_USER -d $POSTGRES_DB -a -f /scripts/data.sql