#!/bin/bash


set -e      # Si hubiera error sale
set -u      # Treat unset variables as an error when substituting.

if [ $# != 2 ]; then
    echo "Please enter a BBDD name and a Script to execute (full path)"
    exit 1
fi

export DBNAME=$1
export SCRIPT_PATH=$2

# export PGPASSWORD="postgres"  

# Suponiendo que ejecuto desde el usuario POSTGRES i al PG_HBA.conf lo tengo como encriptación md5

# Si lo ejecutan con su usuario y lo tienen con 'peer' no hace falta nada

# Si le pasan a un usuario mediante psql, para que pida el password, se puede exportar.

psql \
    -d $DBNAME \
    -f $SCRIPT_PATH \
    --set AUTOCOMMIT=on \
    --set ON_ERROR_STOP=off \


psql_exit_status=$?

if [ $psql_exit_status != 0 ]; then
    echo "psql failed while trying to run this sql script" 1>&2
    exit $psql_exit_status
fi

echo "sql script successful"
exit 0
