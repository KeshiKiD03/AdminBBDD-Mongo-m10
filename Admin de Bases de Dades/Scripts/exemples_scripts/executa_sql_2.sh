#!/bin/bash
set -e
set -u

if [ $# != 2 ]; then
    echo "please enter a database name and a script to execute (full path)"
    exit 1
fi

export DBNAME=$1
export SCRIPT_PATH=$2

export PGPASSWORD="user1"  # si tenim  local 	all		user1		md5   al pg_hba.conf

psql \
    -U user1\
    -d $DBNAME\
    -f $SCRIPT_PATH \
    --set AUTOCOMMIT=off \
    --set ON_ERROR_STOP=on \

psql_exit_status=$?

if [ $psql_exit_status != 0 ]; then
    echo "psql failed while trying to run this sql script" 1>&2
    exit $psql_exit_status
fi

echo "sql script successful"
exit 0


