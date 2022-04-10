#!/bin/bash
set -e      # si hi ha un error surt
set -u      # Treat unset variables as an error when substituting.

if [ $# != 2 ]; then
    echo "please enter a database name and a script to execute (full path)"
    exit 1
fi

export DBNAME=$1
export SCRIPT_PATH=$2

# export PGPASSWORD="postgres"  # suposant que executo des de l'usuari postgres i al pg_hba.conf el tinc amb md5
# si executeu amb el vostre usuari que el teniu amb peer no cal fer res
# si li passeu un usuari a la crida psql , pq no us demani el password, el podeu exportar

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
