#!/bin/sh

set -eu
PG_DATABASE=aire

CSV_URL='https://opendata-ajuntament.barcelona.cat/data/dataset/0582a266-ea06-4cc5-a219-913b22484e40/resource/c2032e7c-10ee-4c69-84d3-9e8caf9ca97a/download'
CSV_TMP=$(mktemp -u); trap 'rm -f "${CSV_TMP}"' EXIT

PSQL="psql ${PG_DATABASE}" 

# Baixem i netegem les dades

#curl -fs | sed '/N/d' > "${CSV_TMP}" # filtrar 
curl -fsSL "${CSV_URL}" | awk -f filtre_aire.awk  > "${CSV_TMP}"

cp "${CSV_TMP}" "/var/tmp/AIRE.csv"

# Importem el csv, treient la capçalera
${PSQL} <<-EOF
   \copy aire3 from '${CSV_TMP}' DELIMITER ';' CSV HEADER; 
EOF

# Fem neteja de la taula, només guardem dels darrers 2 mesos... (exemple una mica xorra...)
#${PSQL} <<-EOF
#   delete from aire3 where extract(month from current_date)-mes>1;
#EOF