# Tasca: Script de creació i càrrega d'una base de dades

Hem de dissenyar la BD i carregar les dades per una aplicació que analitza les dades de la qualitat de l'aire a Barcelona.

Les dades estan disponibles a la web de dades obertes de l'ajuntament de Barcelona: [Mésinfo](https://opendata-ajuntament.barcelona.cat/data/es/dataset/qualitat-aire-detall-bcn)

Hi tenim dades històriques i dades dels darrers 3 dies que s'actualitzen periòdicament. Cada hora

Les dades estan en format csv

Les dades però no estan en el format que necessitem a la nostra base de dades.

Aquí, donat un contaminant i una estació, tenim un registre per cada dia. I a cada registre tenim les dades de les 24 hores del dia en camps diferents.

* A la nostra base de dades, necessitaríem que cada dada temporal estigui en un registre diferent. Per cada registre del .CSV original, haurem de crear 24 registres un per cada hora del dia del registre original.

* I també podríem aprofitar per normalitzar la taula i treure les dades de la província. (Barcelona ciutat sempre és de la província de Barcelona, és informació redundant)

* Fixeu-vos també que al csv hi ha unes columnes V1..V24 que indiquen si la dada de la columna "Hi" està informada
    
* Com que el csv es carrega cada hora, les columnes de les hores posteriors a l'hora actual encara no estan informades. Hem de pensar com ho tractem.

# Que heu de fer:


* Feu l'script sql necessari per crear la BD. Penseu primer quina informació hi voleu guardar.

`1. Tenemos crear la BASE de DATOS 'aire' a mano`:

```sql
teplate1=# CREATE DATABASE aire;
CREATE DATABASE
```



* Feu un script awk que donat un csv descarregat de la web el converteixi en un csv preparat per carregar a la nostra BD

`2. Ejecutamos el escript 'conn_bddd.sh' para conectarnos a la BBDD e insertar datos a la tabla utilizando el script 'create_table.sql'`:

```sql
$ bash conn_bbdd.sh aire '/var/tmp/Keshi/ScriptCarrega/Ficheros/create_table.sql'

-- Para probar si va bien el ETL, podemos provar con el fichero AWK con un fichero CSV Original:

awk -f filtre_aire.awk aire_original.csv
```


`3. Ejecutamos 'script_csv_awk.sh' que utiliza un fichero 'filtre_aire.awk'`:

```sql
$ bash script_csv_awk.sh
```
    
* Feu un script per la càrrega inicial. Que donat uns quants fitxers mensuals descarregats en un directori faci la transformació necessària de les dades i els carregui a la base de dades

* Feu un script bash que s'executi cada dia i que descarregui el darrer csv de la web, el transformi, el carregui a la BD i faci alguna operació més de manteniment de la base de dades. (Per exemple esborrar dades velles o calcular mitjanes a informar a una altra taula)

    
* Podeu fer això o alguna cosa semblant sobre algun altre dataset de les dades obertes de barcelona.

# Més coses que podríem fer

* Un cop carregades les dades del dia, omplir una taula de mitjanes. O d'algunes mitjanes importants. Si volem tenir una taula resum de les mitjanes del dia a la ciutat per mantenir un històric més ràpid de consultar. Podrem fer-ho amb [triggers](https://moodle.escoladeltreball.org/mod/page/view.php?id=138419) o amb un procedure que s'executi després de la importació del dia.

## Script bàsic per descarregar csv, tractament mínim i carregar a BD

Exemple de script, però per carregar les dades tal qual ens arriben. Vosaltres heu de fer neteja de les dades i

```
#!/bin/sh

set -eu

PG_DATABASE=aire

CSV_URL='https://opendata-ajuntament.barcelona.cat/data/dataset/0582a266-ea06-4cc5-a219-913b22484e40/resource/c2032e7c-10ee-4c69-84d3-9e8caf9ca97a/download'
CSV_TMP=$(mktemp -u); trap 'rm -f "${CSV_TMP}"' EXIT


PSQL="psql ${PG_DATABASE}" 

# Baixem i netegem les dades
curl -fsSL "${CSV_URL}"  | sed '/N/d' > "${CSV_TMP}"
# curl -fsSL "${CSV_URL}"  | awk -f aire1.awk  > "${CSV_TMP}"

cp "${CSV_TMP}" "/home/cbernat/Documents/aire/aire1/aire1.csv"


# Importem el csv
${PSQL} <<-EOF
   \copy aire1 from '${CSV_TMP}' DELIMITER ',' CSV HEADER;
EOF

# Fem neteja de la taula
# Només guardem dels darrers 2 mesos... (exemple una mica xorra...)
${PSQL} <<-EOF
   delete from aire1 where extract(month from current_date)-mes>1;
EOF

```

Aquest script carrega les dades del csv descarregat a una taula amb el fromat:

```
aire=> \d aire1
                           Table "public.aire1"
      Column      |         Type         | Collation | Nullable | Default 
------------------+----------------------+-----------+----------+---------
 codi_provincia   | integer              |           |          | 
 provincia        | character varying    |           |          | 
 codi_municipi    | integer              |           |          | 
 municipi         | character varying    |           |          | 
 estacio          | integer              |           |          | 
 codi_contaminant | integer              |           |          | 
 anyo             | integer              |           |          | 
 mes              | integer              |           |          | 
 dia              | integer              |           |          | 
 h01              | double precision     |           |          | 
 v01              | character varying(1) |           |          | 
 h02              | double precision     |           |          | 
 v02              | character varying(1) |           |          | 
 h03              | double precision     |           |          | 
 v03              | character varying(1) |           |          | 
.... 
 h24              | double precision     |           |          | 
 v24              | character varying(1) |           |          | 

```

Les dades tractades les haurieu de carregar a una taula semblant a :

```


aire=> \d aire3
                                           Table "public.aire3"
      Column      |            Type             | Collation | Nullable |              Default              
------------------+-----------------------------+-----------+----------+-----------------------------------
 id               | integer                     |           | not null | nextval('aire3_id_seq'::regclass)
 codi_municipi    | integer                     |           |          | 
 municipi         | character varying           |           |          | 
 estacio          | integer                     |           |          | 
 codi_contaminant | integer                     |           |          | 
 temps            | timestamp without time zone |           |          | 
 valor            | double precision            |           |          | 

```

------------------------------------------------------------------------