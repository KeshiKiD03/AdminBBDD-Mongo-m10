# MONGO DB
## Aaron Andal ASIX M10-BD 2021-2022

Información de MONGO1 [MONGO1](https://moodle.escoladeltreball.org/pluginfile.php/199623/mod_resource/content/0/Mongo.pdf)


Información de MONGO2 [MONGO2](https://moodle.escoladeltreball.org/pluginfile.php/199628/mod_resource/content/0/04-mongoDB-Intro_CRUD_Exercicis_basics.pdf)

How to Install Mongo [Mongo Install](https://www.how2shout.com/linux/how-to-install-mongodb-5-0-server-on-debian-11-bullseye/)

How to Install Mongo [Ejemplos Mongo](https://moodle.escoladeltreball.org/pluginfile.php/199626/mod_resource/content/0/exemples_Mongo_Inventory.txt.js)

DOCS MONGO OFICIAL [Mongo oficial](https://docs.mongodb.com)

DOCS MONGO OFICIAL: Query Operations [Mongo oficial](https://docs.mongodb.com/manual/reference/operator/query/)

DOCS MONGO OFICIAL: Comparison SQL [Mongo oficial](https://docs.mongodb.com/manual/reference/sql-comparison/)


## MONGO DB

* MongoDB es una base de datos orientada a DOCUMENTOS (Semi-Estructurada).

    * La información no se organiz en **``TABLAS``** es **``NOSQL``**.

    * La información se organiza en **``COLECCIONES DE DOCUMENTOS``** --> NO USAN UN ESQUEMA DDL.

    * Se utilizan estructuras similares a JSON = Diccionarios (Pares **``CAMPO-VALOR``**).

    * Se asemeja a un lenguaje de programación que asocia ``LLAVES con VALORES`` (Diccionarios, hashes, maps, arrays...).

    * Usa ``BSON`` Documents.

### CARACTERÍSTICAS

* Poca estructura de datos --> Muy ``flexible``

* Muy relacionadas entre ellas.

    * Se procesa más ``rapido`` la información, pero el mantenimiento es lento.

    * Mucha cantidad de datos.

* Es ``escalable`` y fácil de implementar en el cloud, es rápido.

* MongoDB es muy ``flexible``.

* Tiene **ARRAYS de números o Subdocumentos**.

* Un where es un ``JSON``.

    * Para especificara, hacemos otro ``JSON {}``

    * Cogemos la etiqueta del campo.

### DOCUMENTOS Y COLECCIÓN

`` JSON : JavaScript Object Notation:`` 
    
* Es un formato basado en texto estándar para representar datos estructurados en la sintaxis de ``Objetos de JavaScript``.

* **``COLECCIÓN``:** Es un conjunto de documentos que comparten índices (La información más importante).

    * Los documentos de una COLECCIÓN pueden tener campos diferentes.

**EJEMPLO DE DOCUMENTO**

```
{
    Nombre: "Miguel",
    Apellidos: "Parada",
    Edad: 39,
    Aficiones: ["Música","Ciclismo","Baloncesto"],
    Amigos: [
        {
        Nombre:"Marie",
        Edad:35 },
        {
        Nombre:"Elsa",
        Edad:42
        }
    ]
} 
```
### ESTRUCTURA 

**BASE DE DATOS**

* **``COLECCIONES``**

    * **``Documentos``** (Objeto del cual guardamos información)

        * **``Identificado``** de una forma con ID (Si no lo ponemos, lo pone **``Mongo``**).

        * **``Listado de campos``** separados por **``COMAS``** { camp1, camp2, camp3, ....}

            * **``CAMPO``**

                * **NomDeCampo: Valor**

                * **NomDeCampo: [valor2, valor2],...**

                    * El *valor* puede ser:

                        * **"Valor"**: Comillas obligatorias por TEXTO

                        * Documento/Objeto --> {}.

### COMPARACIÓN MONGO VS SQL (Modelo Relacional)

![Comparison Mongo](https://github.com/KeshiKiD03/m10/blob/master/Photos/mongo2.PNG)

![Comparison Mongo0](https://github.com/KeshiKiD03/m10/blob/master/Photos/mongo3.PNG)

[MongoDB SQL Comparison](https://docs.mongodb.com/manual/reference/sql-comparison/)

### INSTALACIÓN (DEBIAN)

[INSTALACIÓN DE MONGO DB EN DEBIAN 10 / 11](https://www.how2shout.com/linux/how-to-install-mongodb-5-0-server-on-debian-11-bullseye//)


[INSTALACIÓN DE MONGO DB EN UBUNTU 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04-es/)

**SE ABRE MONGOSH**

### PRIMEROS PASOS DE MONGO DB

1. Para ver a que BBDD estamos conectados: **``bd``**.

2. Para ver que BBDD existen: **``show databases``**

3. Conectase a una BBDD

    * **``use <nombreBD``>**

4. Ver que colecciones existen en la BBDD.

    * **``show collections``**

    * Cuando insertamos, se crea una colección automáticamente.

5. Ayuda:

    * **``Help``** o **``db.help()``** o **``db.collecio.help()``**

6. Limpiar la consola: **``cls``**.

7. Consultas: **``db.<nomBD>.find()``**

    * ``db.users.find( {name: "Manel"} ).pretty()``

### IMPORTACIÓN

* **``mongoimport --db <dbName> --collection <collectionName> --file <fileName.json>``**

* El fichero JSON puede ser un ARRAY o NO.

    * Si ``NO`` es un ARRAY, un documento por cada línea, sin comas entre ellas.

    * Si ``ES`` un ARRAY, le ponemos un ``[i]`` y se separan los **``documentos``** con comas.

### FINDS() = SELECTS

![MongoDB Find](https://github.com/KeshiKiD03/m10/blob/master/Photos/mongo4.PNG)

* **``QUERY``**: Qué documentos queremos.

* **``PROJECTION``**: Qué información queremos ver.

    * Es el **``segundo argumento``** del **``find``()**.

        * Especifica la información (**``Los campos``**) que queremos mostrar.

        * Para definir que queremos 1 (INCLUIR1) o 0 (EXCLUIR).

        * Por defecto muestra el campo ID.

            * Para ello hay que poner **``_id:0``**.

* **MODIFICADOR**: Impone *``límites``* o *``órdenes``*.

    * *``limit()``*

    * *``order()``*

    * *``count()``*

    * *``pretty()``*

* ***``db.collection.findOne()``*** --> Retorna 1 registro!.

![MongoDB Projection](https://github.com/KeshiKiD03/m10/blob/master/Photos/mongo5.PNG)

![MongoDB Modificador](https://github.com/KeshiKiD03/m10/blob/master/Photos/mongo6.PNG)

### EJEMPLOS DE CONSULTA ADE DATOS

[MongoDB Ejemplos](https://docs.mongodb.com/manual/tutorial/query-documents/)

![MongoDB Ejemplos Consulta](https://github.com/KeshiKiD03/m10/blob/master/Photos/mongo7.PNG)

### OPERADORES EN QUERYS

[MongoDB Operadores Querys](https://docs.mongodb.com/manual/reference/operator/query/)

![MongoDB Ejemplos Consulta](https://github.com/KeshiKiD03/m10/blob/master/Photos/mongo8.PNG)

### OPERACIONES RELACIONALES (AND OR NOT)

[MongoDB Operadores Querys](https://docs.mongodb.com/manual/reference/operator/query-logical/)

### EJEMPLOS Y EJERCICIOS QUERYS MONGO DB

* Buscar los estudiantes de género masculino (2895)

`db.students.find( {gender: "H"}).count()`

`2895`

```yaml
test> db.students.find( {gender: "H"}).limit(3)
[
  {
    _id: ObjectId("57694ec7dabba852cb0ca3f1"),
    name: 'Joan Ignasi',
    lastname1: 'Zumarán',
    lastname2: 'Astilleros',
    gender: 'H',
    email: 'litke@talktalk.net',
    phone: '699.225.929',
    birth_year: 1976
  },
  {
    _id: ObjectId("57694ec7dabba852cb0ca3f4"),
    name: 'Lluis Miquel',
    lastname1: 'Zeitz',
    lastname2: 'Abad',
    gender: 'H',
    email: 'w0lfspirit32@hotmail.co.uk',
    phone: '665.612.911',
    phone_aux: '921.629.152',
    birth_year: 1968
  },
  {
    _id: ObjectId("57694ec7dabba852cb0ca3fa"),
    name: 'Daniel',
    lastname1: 'Zapata',
    lastname2: 'Abenza',
    gender: 'H',
    email: 'sashalws@aol.com',
    phone: '925.955.699',
    birth_year: 1964
  }
]
```

* Buscar los estudiantes de género femenino (348)

`db.students.find( {gender: "M"}).count()`

`348`

* Buscar los estudiantes nacidos en el año 1993 (97)

`db.students.find( {birth_year: 1993}).count()`

`97`

* Buscar los estudiantes de género masculino y nacidos en el año 1993 (81)

`db.students.find( {gender: "H", birth_year: 1993}).count()`

`81`

* Buscar los estudiantes nacidos después del año 1990 (289)

`db.students.find( {birth_year: { $gt: 1993} } ).count()`


# CHEATSHEET MONGO

https://docs.mongodb.com/manual/reference/operator/query/

https://docs.mongodb.com/manual/reference/operator/update/

https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/

Se usa MONGO o MONGOSH

# IMPORTAR

mongoimport --db [DATABASE-NAME] --collection [COLLECTION-NAME] --file movies.json 

mongoimport --db imdb --collection movies --file movies.json 


# FIRST STEPS

1. Para ver a que BBDD estamos conectados: `bd`.

2. Para ver que BBDD existen: `show databases`.

3. Conectarse a una BD - Antes importar: `use <nombreBD>`

4. Ver que coleciones existen en la BD: `show collections`

    Cuando insertamos, se crea una colección automáticamente.

5. Ayuda: `help` o `db.help()`.

6. Limpiar la consola: `cls`.

7. Consultas: db.[nomCollection].find()

    * Ejemplo: `db.users.find( {name: "Manel"} ).pretty()`


# SELECT = FIND

* Consultas: db.[nomCollection].find()

    * Ejemplo: `db.users.find( {name: "Manel"} ).pretty()`

        * *Los que se llamen Manel*

* SUBCAMPOS --> **COMILLAS OBLIGATORIAS** --> "SUBCAMPO"

## EJEMPLOS DE SELECTS


# CRUD - DML

# INSERT()

* Cuando se inserta DATOS se crea automáticamente una colección.

*SINTAXIS*

`db.collectionName.insertOne()` --> Inserta 1

`db.collectionName.insertMany({},{})` --> Inserta varios

# UPDATE()

* Hay que indicar `2 parámetros`.

    * QUE DOCUMENTOS QUEREMOS CAMBIAR

    * QUE VALORES NUEVOS QUEREMOS.

db.[collectionName].update(
    {
        name: "Manel"
    },
    {
        $set: {
            lastname: "Fuentes",
        }
    }
)

* Si el campo no existe, crea con el **VALOR indicado**.

* Se puede usar:

`db.[collectionName].updateOne()` --> Cambia uno

`db.[collectionName].updateMany()` --> Modifica varios

* Si el documento no existe lo crea.

### Operadores para MODIFICAR

`$set` --> Cambiar - Set

`$inc` --> Incrementar

*EJEMPLO*

db.books.update(
    { _id: 1 },
    {
        $set: {
            item: "ABC123",
            "info.publisher": "2222",
            tags: [ "software" ],
        }
        $inc: { stock: 5 },
    }
)


* Se pueden modificar **subcampos**

# DELETE()

* Elimina todos los documentos que *cumplan una condición*.

`db.users.remove( { name: "Manel" } )`

* Eliminar *tots els documents* d’una *col·lecció*:

`db.users.remove( { } )`

* Eliminar *col·lecció* i *documents*:

`db.users.drop()`

* Eliminar **BBDD**:

`db.dropDatabase()`


# AGREGACIÓN

db.[collectionName].aggregate([
    { $match: { status: "A"}},
    { $group: {_id: "$cust_id", total: { $sum: "$amount"}}}
])

* Permite hacer los **GROUPBY**

*EJEMPLO*

* Per cada cust_id, suma el preu de les seves ordres de status "A" i mostra només els que la suma sigui major que 250.

### SQL

```sql
SELECT cust_id,
    SUM(price) as total
FROM orders
WHERE status = 'A'
GROUP BY cust_id
HAVING total > 250
```

### MONGO

```json
db.orders.aggregate( [
    { $match: { status: 'A' } },
    {
        $group: {
            _id: "$cust_id",
            total: { $sum: "$price" }
        }
    },
    { $match: { total: { $gt: 250 } }
}
] )
```

### VARIABLES

### EJEMPLOS

