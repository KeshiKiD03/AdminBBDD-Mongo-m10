#!/bin/bash

set -e
set -u

PSQL=/usr/bin/psql


$PSQL \
    -X \
    -c "select ofinum, ciudad, region, objetivo, ventas from oficina order by ofinum" \
    --single-transaction \
    --set AUTOCOMMIT=off \
    --set ON_ERROR_STOP=on \
    --no-align \
    -t \
    --field-separator ' ' \
    --quiet \
    -d training \
| while read ofinum ciudad region objetivo ventas ; do
    echo "OFICINA: ofinum: $ofinum, ciudad: $ciudad, region: $region, objetivo: $objetivo, ventas: $ventas"
done


