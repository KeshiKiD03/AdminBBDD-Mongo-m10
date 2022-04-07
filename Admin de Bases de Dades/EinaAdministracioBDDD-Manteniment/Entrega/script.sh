#!/bin/bash

pg_dump -Fc pagila > pagila-"$(date)".dump

# SQL Script-file type:
# pg_dump pagila > pagila.sql

# Directory Format Archive
# pg_dump -Fd pagila -f pagila

# Directory format in parallel with 5 worker jobs
# pg_dump -Fd pagila -j 5 -f dumpdir

# A single table
# pg_dump -t mypagilatab pagila > pagila.sql

# To dump all tables whose names start with emp in the detroit schema, except for the table named employee_log:
# $ pg_dump -t 'detroit.emp*' -T detroit.employee_log mydb > db.sql

# More info: https://www.postgresql.org/docs/current/app-pgdump.html 
