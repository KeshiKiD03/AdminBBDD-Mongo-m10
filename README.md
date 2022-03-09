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

## OPERADORES QUERY

[MongoDB Operadores Querys](https://docs.mongodb.com/manual/reference/operator/query/)

![MongoDB Ejemplos Consulta](https://github.com/KeshiKiD03/m10/blob/master/Photos/mongo8.PNG)

* $gt --> `Mayor que`

* $gte --> `Mayor o igual que`

* $in --> `Cualquier valor` que existe en el ARRAY

* $lt --> `Menor que`

* $lte --> `Menor o igual` que

* $ne --> Que `NO` sean

* $nin --> `Not in`

## OPERADORES LÓGICOS

* AND

* OR

* NOT

[MongoDB Operadores Querys](https://docs.mongodb.com/manual/reference/operator/query-logical/)


## EJEMPLOS DE / FINDS SELECTS KESHI

----------------------------------------------------------------------------------

*Buscame el genero H y muéstrame solo el `primer apellido` con `PRETTY`*

`db.students.find({gender:"H"}, {lastname1:1, _id:0}).pretty()`

----------------------------------------------------------------------------------

*BUSCAR A TODO*

`db.students.find()` o `db.students({})`

----------------------------------------------------------------------------------

*Documentos de la colección de ESTUDIANTES donde el BIRTH_YEAR sea `mayor o igual` a 1990*

`db.students.find( {"birt_year": {$gte: 1990} })`

----------------------------------------------------------------------------------

*Documentos de la colección de BOOKS donde el PUBLITACIONYEAR sea `menor o igual` a 2009*

`db.books.find( {"publicationYear": {$lte: 2009} })`

----------------------------------------------------------------------------------

*Documentos de la colección de STUDENTS donde el BIRTH_YEAR sea `SEA` 1980 o 1985*

* v1 con $or
 
```json
db.students.find( 
    {$or: 
    [ 
        {"birth_year": 1980},
        {"birth_year": 1985}
    ]}).pretty()
```

* v2 con $in

```json
db.students.find( 
    {"birth_year": {
        $in: [
            1980, 1985
        ]}
    }).pretty()
```

----------------------------------------------------------------------------------

*Documentos de la colección de BOOKS donde el TAGS `CONTENGAN` CSS o HTML*

* v1 con $or

```json
db.books.find( 
    {$or: 
    [ 
        {"tags": "CSS"},
        {"tags": "HTML"}
    ]}).pretty()
```

* v2 con $in

```json
db.students.find( 
    {"tags": {
        $in: [
            "CSS", "HTML"
        ]}
    }).pretty()
```

* v3 con un $and

```json
db.students.find( 
    {$and: 
    [
        {"tags": "CSS"},
        {"tags": "HTML"}   
    ]
    }).pretty()

```

----------------------------------------------------------------------------------

*RANGO DE FECHAS entre 1990 y 1994*

`Con el greater or equal than y less or equal than`

* v1 sin AND, con operadores de QUERY

```json
db.students.find( {"birt_year": {$gte: 1990, $lte: 1994}}).pretty()
```

```json
db.books.find( {"publicationYear": {$gte: 1990, $lte: 1994}}).pretty()
```

* v2 con AND

```json
db.students.find( { $and: [
        { "birth_year": { $gte: 1990}},
        { "birth_year": { $lte: 1994}}
    ]
},{_id: 0}).pretty()
```

*Si no queremos ver el id*


```json
db.books.find( { $and: [
        { "publicationYear": { $gte: 1990}},
        { "publicationYear": { $lte: 1994}}
    ]
}).pretty()
```

----------------------------------------------------------------------------------

*Query en un ARRAY*

**Retorna la colección de BOOKS donde cada libro exactamente tenga 2 AUTORES**

```json
db.books.find({"author": {$size: 2}}).pretty()
```

**Retorna la colección de BOOKS donde cada libro exactamente tenga 1 AUTOR**

```json
db.books.find({"author": {$size: 1}}).pretty()
```

**Retorna la colección de BOOKS donde cada libro exactamente tenga 2 AUTOR, 3 o 4 AUTORES**

```json
db.books.find({$or: [{"author": {$size: 2}},
                     {"author": {$size: 3}},
                     {"author": {$size: 4}}]}
).pretty()
```

----------------------------------------------------------------------------------


`**QUERY CON EXPERIONES REGULARES**`

**RETORNA TODOS LOS DOCUMENTOS de la COLECCIÓN de ESTUDIANTES donde el NOMBRE empieza con una VOCAL**

* $options: 'i' --> CASE SENSITIVE

* *$regex: /$[TERMINAN]*

```json
db.students.find({"name": {$regex: /^[aeiou]/, $options: 'i'}}).pretty()
```

* LOS QUE EMPIEZAN POR A E I O U con case SENSITIVE

```json
db.students.find({"name": {$regex: /^[aeiou]/i}}).pretty()
```

* LOS QUE EMPIEZAN POR C con case SENSITIVE

```json
db.students.find({"name": {$regex: /^[c]/i}}).pretty()
```

* SIN REGEX TERMINA EN .NET SIN REGEX

```json
db.students.find({email: /\.net$/}).pretty().count()
```

* SIN $REGEX

```json
db.students.find({"name": /^[aeiou]/i}).pretty()
```

----------------------------------------------------------------------------------

**Buscar los estudiantes nacidos en la década de los 90 (387)**

* v1

```json
db.students.find( {
  $and: [
    { birth_year: { $gte: 1990} },
    { birth_year: { $lt: 2000} }
  ]
}).count()
```

387

* v2

```json
db.students.find( { birth_year: { $gte: 1990, $lt: 2000} } ).count()
```



----------------------------------------------------------------------------------

**Buscar los estudiantes nacidos en la `década de los 80` (936)**

```json
db.students.find( 
  {
    $or: [ 
      {birth_year: { $gte: 1980} },
      {birth_year: { $lte: 1990}}
    ]
  }
  ).count()
```

----------------------------------------------------------------------------------

*--    Buscar los estudiantes de `género femenino` nacidos en la `década de los 90` (48)*

```json
db.students.find({birth_year:{$gte: 1990, $lte: 1999},gender:"M"}).pretty().count()
```

----------------------------------------------------------------------------------

**--    Buscar los estudiantes de `género masculino` nacidos en la década de los `80` (851)**

```json
db.students.find({birth_year:{$gte: 1980, $lte: 1989}, gender: "H"}).pretty().count()
```

----------------------------------------------------------------------------------

**Buscar los estudiantes que no han nacido en el año 1985 (3147)**

* LOS QUE HAN NACIDO EN 1985

```json
db.students.find({birth_year: 1985}).pretty().count()
```

* LOS QUE NO HAN NACIDO EN 1985 con un $NIN - NOT IN

* EL NOT IN ? $NIN HACE COMO UN OR

```json
db.students.find( {birth_year: {$nin: [1985]}}).pretty().count()
```

----------------------------------------------------------------------------------

**--    Buscar aquellos estudiantes `que hayan` nacido en el año 1970, 1980 o 1990 (293)**

* EL NOT IN ? $IN HACE COMO UN OR

```json
db.students.find({birth_year: {$in: [1970,1980,1990]}}).count()
```

* CON OR

```json
db.students.find({$or: [{birth_year: 1970},
                        {birth_year: 1980},
                        {birth_year: 1990}]}).count()
```


----------------------------------------------------------------------------------

**--    Buscar aquellos estudiantes que `no hayan nacido` en el año 1970, 1980 o 1990 (2950)**

```json
db.students.find({birth_year: {$nin: [1970,1980,1990]}}).count()

```

----------------------------------------------------------------------------------

**--    Buscar los estudiantes nacidos en `año par` (1684)**

* MODULO = RESTO

```json
db.students.find({birth_year: {$mod: [2, 0]}}).count()
```

----------------------------------------------------------------------------------

**--    Buscar los estudiantes nacidos en `año impar` (1559)**

```json
db.students.find({birth_year: {$mod: [2, 1]}}).count()

```

----------------------------------------------------------------------------------

**--    Buscar estudiantes nacidos en `año par` de la década de los 70 que sean hombres (403)**

```json
db.students.find({
    birth_year: 
        {$mod: [2, 0], 
        $gte: 1970, 
        $lte: 1979}, 
        gender: "H"}
).count()
```

----------------------------------------------------------------------------------

**--    Buscar los estudiantes que tengan `teléfono auxiliar` (679)**

* CON $EXISTS - BOOLEANO

```json
db.students.find({phone_aux: {$exists:true}}).count()

```

----------------------------------------------------------------------------------

**--    Buscar los estudiantes que `no tengan teléfono auxiliar` (2564)**

* CON $EXISTS - BOOLEANO

```json
db.students.find({phone_aux: {$exists:false}}).count()

```

----------------------------------------------------------------------------------

**--    Buscar los estudiantes que `no tengan segundo apellido` (421)**

```json
db.students.find({lastname2: {$exists:false}}).count()
```

----------------------------------------------------------------------------------

**--    Buscar los estudiantes que tengan teléfono auxiliar y `solo un apellido` (71)**

```json
db.students.find({
    phone_aux: {$exists: true},
    lastname2: {$exists: false}
}
).count()
```

71

----------------------------------------------------------------------------------

**--    `Crea un nuevo documento` en la `colección`, pero en lugar de utilizar el método `insert()` usad el método `save()`. ¿Hay alguna diferencia? Ahora crea otro documento, pero poniendo manualmente el `_id`. Y crea otro documento más, utilizando la `última sentencia`, cambiando algún campo `(excepto el _id)`. ¿Qué ocurre? ¿Cuál es la diferencia entonces?**

```json
db.students.save( { item: "book", qty: 40 } )
```

```json
db.students.save( { _id: 100, item: "water", qty: 30 } )
```

```json
db.students.save
```

* Dado que el campo _id tiene un valor que no existe en la colección, la operación de actualización da como resultado una inserción del documento. Los resultados de estas operaciones son idénticos a un método update() con la opción upsert establecida en verdadero. 

https://docs.mongodb.com/v4.0/reference/method/db.collection.save/ 

----------------------------------------------------------------------------------

**--    Buscar los estudiantes cuyo `email` termine en `.net` (48)**

* SIN REGEX, TERMINA EN / SIN CASO SENSITIVO

```json
db.students.find({email: /\.net$/}).pretty().count()
```


----------------------------------------------------------------------------------

**--    Buscar los estudiantes cuyo email `termine` en `.org` (16)**

* CON CASO SENSITVO

```json
db.students.find({email: /\.ORG$/i}).pretty().count()
```

* SIN CASO SENSITIVO

```json
db.students.find({email: /\.org$/}).pretty().count()
```

----------------------------------------------------------------------------------

**--    Buscar los estudiantes `cuyo teléfono` `empiece por 622` (201)**


```json
db.students.find({$or: [{phone:/^622/},{phone_aux:/^622/}]}).pretty().count()
```

----------------------------------------------------------------------------------

**--    Buscar los estudiantes cuyo dni empiece y termine por letra (244)**

```json
db.students.find({
    No se tiene que hacer NO SE PUEDE NO TIENE
})
```

----------------------------------------------------------------------------------

**--    Buscar los estudiantes `cuyo nombre empiece por vocal` (760)**

* $options: 'i' --> CASE SENSITIVE

**OPCION CORRECTA**
```json
> db.students.find({"name": /^[aeiouàáèéìíòóùú]{1}/i}).pretty().count()
760
```


* *$regex: /$[TERMINAN]*

```json
db.students.find({$or: [{name: /^A/}, {name: /^E/}, {name: /^I/}, {name: /^O/},
{name: /^U/}]}).pretty().count()
```


```json
db.students.find({"name": {$regex: /^[aeiou]/, $options: 'i'}}).pretty().count()
```

* LOS QUE EMPIEZAN POR A E I O U con case SENSITIVE

```json
db.students.find({"name": {$regex: /^[aeiou]/i}}).pretty().count()
```

* SIN $REGEX

```json
db.students.find({"name": /^[aeiou]/i}).pretty().count()
```

----------------------------------------------------------------------------------

**--    Buscar estudiantes cuyo nombre `sea compuesto` (470)**

```json
db.students.find({"name": /.+\s.+/}).pretty().count()
```

----------------------------------------------------------------------------------

**--    Buscar los estudiantes con nombre más largo de `13 caracteres` (138)**

v1

```json
db.students.find({"name": /.{13,}/}).pretty().count()
```

* v2

```json
db.students.find({$where: "this.name.length >= 13"}).count()

```

----------------------------------------------------------------------------------

**--    Buscar los estudiantes con `3 o más vocales en su nombre` (705)**

```json
db.students.find({"name": /.*[aeiouàáèéìíòóùú].*[aeiouàáèéìíòóùú].*[aeiouàáèéìíòóùú].*[aeiouàáèéìíòóùú].*/i}).count()
```
705

----------------------------------------------------------------------------------

# PARTE 2 IMDB

db.movies.find().pretty()

db.people.find().pretty()

db.oscars.find().pretty()


**-- 1. Buscar las personas `que sólo han actuado` `(no dirigido)` (1909)**

```json
db.people.find({hasActed:true,hasDirected:{$exists:false}}).pretty().count()

```

----------------------------------------------------------------------------------


**-- 2. Buscar las personas que `sólo han dirigido (no actuado)` (341)**

```json
db.people.find({hasDirected:true,hasActed:{$exists:false}}).pretty().count()
```


----------------------------------------------------------------------------------


**-- 3. Buscar las personas que `han actuado` y `dirigido` (20)**

```json
db.people.find({hasDirected:true,hasActed:true}).pretty().count()
```

----------------------------------------------------------------------------------


**-- 4. Buscar las personas que `ni han actuado ni dirigido` (29)**

```json
db.people.find({hasDirected:{$exists:false},hasActed:{$exists:false}}).pretty().count()
```


----------------------------------------------------------------------------------



**-- 5. Buscar las películas protagonizadas por `Penelope Cruz` (2)**

```json
db.movies.find({"actors.name": "Penelope Cruz"}).count()
```

----------------------------------------------------------------------------------


**-- 5.1.- Mostrar-ne els titols i els directors**

```json
db.movies.find({"actors.name":"Penelope Cruz"}, {name:1, "directors.name": 1}).pretty()
```


----------------------------------------------------------------------------------


**-- 6. Insereix `la peli següent amb el seu director` i `els seus 3 actors principals`. http://www.imdb.com/title/tt1205489/?ref_=nm_flmg_act_3**

## INSERT

```json
db.movies.insertOne({name: 'Gran Torino NEW', actors: [{name: 'Clint Eastwood'}, {name: 'Bee Vang'}, {name: 'Christopher Carley'}]})
```

	"acknowledged" : true,
	"insertedId" : ObjectId("6228e0bf7726400b1863d6b3")
}
> 


----------------------------------------------------------------------------------


**-- 7. Fer la consulta per mostrar `les pel·lícules on Clint Eastwood` surt `com a actor` i `com a director`. (3)**

```json
db.movies.find({"actors.name": 'Clint Eastwood'}, {"directors.name": 'Clint Eastwood'}).count()
```


----------------------------------------------------------------------------------



**-- 8. Mostra el `titol` de les `pelis dirigides` per `James Cameron`** (4)

```json
db.movies.find({"directors.name": 'James Cameron'}).count()
```

4

----------------------------------------------------------------------------------


**-- 9. Mostra el titol de les pelis dirigides per `James Cameron` `anteriors` a `l'any 2000`** (3)

```json
db.movies.find({"directors.name": 'James Cameron', year: {$lt: 2000}}).count()
```
3

----------------------------------------------------------------------------------



**-- 10. Mostra els `actors que participen a la pel·lícula Avatar`**

```json
db.movies.find({"name": 'Avatar'},{"actors.name":1}).pretty()
```

* OUTPUT

```json
{
	"_id" : "0499549",
	"actors" : [
		{
			"name" : "Sam Worthington"
		},
		{
			"name" : "Zoe Saldana"
		},
		{
			"name" : "Sigourney Weaver"
		},
		{
			"name" : "Stephen Lang"
		},
		{
			"name" : "Michelle Rodriguez"
		}
	]
}
```

----------------------------------------------------------------------------------


**-- 11. Nom dels actors que participen en alguna de les `pel·lícules de James Cameron`**

```json
db.movies.find({"directors.name": 'James Cameron'},{"actors.name":1})
```

* OUTPUT

```json
{
	"_id" : "0499549",
	"actors" : [
		{
			"name" : "Sam Worthington"
		},
		{
			"name" : "Zoe Saldana"
		},
		{
			"name" : "Sigourney Weaver"
		},
		{
			"name" : "Stephen Lang"
		},
		{
			"name" : "Michelle Rodriguez"
		}
	]
}
{
	"_id" : "0120338",
	"actors" : [
		{
			"name" : "Leonardo DiCaprio"
		},
		{
			"name" : "Kate Winslet"
		},
		{
			"name" : "Billy Zane"
		},
		{
			"name" : "Kathy Bates"
		},
		{
			"name" : "Bill Paxton"
		}
	]
}
....
```


----------------------------------------------------------------------------------


**-- 12. Dona d'alta la peli https://www.imdb.com/title/tt4846340/?ref_=fn_al_nm_1a sense posar `els actors ni el director`.**

## INSERT

```json
db.movies.insertOne({name: 'Hidden Figures', year: 2016, rating: 'PG-13', runtime: 127, genre: 'BDH'})
```

* db.movies.find().pretty() --> Per observar les dades

* OUTPUT

```json
{
	"acknowledged" : true,
	"insertedId" : ObjectId("6228e2a3c7de7acde7d7438d")
}

```

----------------------------------------------------------------------------------


**-- 12.1 Poseu-li rating: `M02`**

## UPDATE

```json
db.movies.updateOne({
    name: 'Hidden Figures'
},
    {$set: {rating: 'M02'}})
```

* OUTPUT

```json
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

* VERIFY

```json
> db.movies.find({name: "Hidden Figures"}).pretty()
{
	"_id" : ObjectId("6228e2a3c7de7acde7d7438d"),
	"name" : "Hidden Figures",
	"year" : 2016,
	"rating" : "M02",
	"runtime" : 127,
	"genre" : "BDH"
}
```


----------------------------------------------------------------------------------


**-- 12.2 `Incrementa` la durada en `10 min`**

```json
db.movies.updateOne({
    name: 'Hidden Figures'
},
    {$inc: {runtime: 10}})
```

```json
db.movies.updateOne({
    _id: ObjectId(" 62273a2480f2f183104c9292 ")
},
    {$inc: {runtime: 10}})
```

* OUTPUT

```json
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

* VERIFY

```json
> db.movies.find({name: "Hidden Figures"}).pretty()
{
	"_id" : ObjectId("6228e2a3c7de7acde7d7438d"),
	"name" : "Hidden Figures",
	"year" : 2016,
	"rating" : "M02",
	"runtime" : 137,
	"genre" : "BDH"
}
```

----------------------------------------------------------------------------------



**-- 13. `Afegeix els 4 primers actors` (si feu scroll vertical, us surten a l'apartat Cast)**

```json
db.movies.updateOne({
    name: 'Hidden Figures'
},
    {$set: {actors: ["Taraji P. Henson","Octavia Spencer ","Janelle Monáe ", "Kevin Costner"]}})
```

* OUTPUT

```json
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

* VERIFY

```json
> db.movies.find({name: "Hidden Figures"}).pretty()
{
	"_id" : ObjectId("6228e2a3c7de7acde7d7438d"),
	"name" : "Hidden Figures",
	"year" : 2016,
	"rating" : "M02",
	"runtime" : 137,
	"genre" : "BDH",
	"actors" : [
		"Taraji P. Henson",
		"Octavia Spencer ",
		"Janelle Monáe ",
		"Kevin Costner"
	]
}
```


----------------------------------------------------------------------------------


**-- 14. Afegeix-te `a tu com a director`**

```json
db.movies.updateOne({
    name: 'Hidden Figures'
},
    {$set: {directors: "Aaron"}})
```

* OUTPUT

```json
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

* VERIFY

```json
> db.movies.find({name: "Hidden Figures"}).pretty()
{
	"_id" : ObjectId("6228e2a3c7de7acde7d7438d"),
	"name" : "Hidden Figures",
	"year" : 2016,
	"rating" : "M02",
	"runtime" : 137,
	"genre" : "BDH",
	"actors" : [
		"Taraji P. Henson",
		"Octavia Spencer ",
		"Janelle Monáe ",
		"Kevin Costner"
	],
	"directors" : "Aaron"
}

```


----------------------------------------------------------------------------------



**-- 15. Treu `la clau de directors`**

```json
db.movies.find({"name":"Hidden Figures"},{"directors.id":'1'})
```

* OUTPUT

```json
{ "_id" : ObjectId("6228e2a3c7de7acde7d7438d") }
```

----------------------------------------------------------------------------------


**-- 16. Torna a posar la clau de directors amb el valor Theodore Melfi.**

```json
db.movies.updateOne({"_id" : ObjectId("6228e2a3c7de7acde7d7438d") }, {$set:{"directors": "Theodore Melfi"}})
```

* VERIFY

```json
> db.movies.find({name: "Hidden Figures"}).pretty()
{
	"_id" : ObjectId("6228e2a3c7de7acde7d7438d"),
	"name" : "Hidden Figures",
	"year" : 2016,
	"rating" : "M02",
	"runtime" : 137,
	"genre" : "BDH",
	"actors" : [
		"Taraji P. Henson",
		"Octavia Spencer ",
		"Janelle Monáe ",
		"Kevin Costner"
	],
	"directors" : "Theodore Melfi"
}

```

----------------------------------------------------------------------------------

**-- 17. `Esborreu` la peli**

```json
db.movies.deleteOne({_id: ObjectId("6228e2a3c7de7acde7d7438d")})
```

* OUTPUT

```json
"_id" : ObjectId("6228e2a3c7de7acde7d7438d")
```

* VERIFY

```json
> db.movies.find({name: "Hidden Figures"}).pretty()

```


----------------------------------------------------------------------------------


**-- 18. A totes les pelis del director `George Lucas` posar genre:"`SW`"**

```json
db.movies.updateMany({'directors.name': 'George Lucas'}, {$set: {genre: 'SW'}})
```

* OUTPUT

```json
{ "acknowledged" : true, "matchedCount" : 4, "modifiedCount" : 4 }
```

----------------------------------------------------------------------------------


**-- 18.0 Mostrar el `nom` i el `gènere de totes les pelis` de `George Lucas`**

```json
db.movies.find({"directors.name":"George Lucas"},{"name":1, "genre": 1})
```

* VERIFY

```json
> db.movies.find({"directors.name":"George Lucas"},{"name":1, "genre": 1}).pretty()
{
	"_id" : "0120915",
	"name" : "Star Wars: Episode I - The Phantom Menace",
	"genre" : "SW"
}
{ "_id" : "0076759", "name" : "Star Wars", "genre" : "SW" }
{
	"_id" : "0121766",
	"name" : "Star Wars: Episode III - Revenge of the Sith",
	"genre" : "SW"
}
{
	"_id" : "0121765",
	"name" : "Star Wars: Episode II - Attack of the Clones",
	"genre" : "SW"
}
```

----------------------------------------------------------------------------------



**-- -- 19. Pel·licules on han intervingut junts `Kate Winslet` i `Leonardo Di Caprio`. Mostrar `titol peli` i` nom dels actors`.**

* Con $all - Busca en subcampos

```json
db.movies.find({'actors.name': { $all: ['Kate Winslet', 'Leonardo DiCaprio']}}, {name: 1,'actors.name': 1}).pretty()
```

* VERIFY

```json
db.movies.find({'actors.name': { $all: ['Kate Winslet', 'Leonardo DiCaprio']}}, {name: 1,'actors.name': 1}).pretty()
{
	"_id" : "0120338",
	"name" : "Titanic",
	"actors" : [
		{
			"name" : "Leonardo DiCaprio"
		},
		{
			"name" : "Kate Winslet"
		},
		{
			"name" : "Billy Zane"
		},
		{
			"name" : "Kathy Bates"
		},
		{
			"name" : "Bill Paxton"
		}
	]
}

```

# AARON ANDAL

----------------------------------------------------------------------------------




# CRUD - DML

# INSERT()

* Cuando se inserta DATOS se crea automáticamente una colección.

*SINTAXIS*

`db.collectionName.insertOne()` --> Inserta 1

`db.collectionName.insertMany({},{})` --> Inserta varios

# UPDATE()

`SINTAXIS`

* `db.collection.update`(<query>, <update>, <options>)

* Hay que indicar `2 parámetros`.

    * QUE DOCUMENTOS QUEREMOS CAMBIAR

    * QUE VALORES NUEVOS QUEREMOS.

db.collection.update(
    <query>,
    <update>,
    {
        upsert: <boolean>,
        multi: <boolean>,
        writeConcern: <document>
    }

)

* query = Criterio para el UPDATE - Se usa con el FIND() también.

* update = Modificaciones a aplicar.

* upsert = BOOLEAN = Crea un nuevo documento si es TRUE y no hace match con el QUERY CRITERIA.

* multi = BOOLEAN = Si es TRUE, crea múltiples documentos con el QUERY CRITERIA. Si es falso.

**EJEMPLO1**

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


**EJEMPLO2**

db.[books].update(
    {
        _id: 1
    },
    {
        $inc: { stock: 5},
        $set: {
            item: "ABC123",
            "info.publisher": "2222",
            tags: [ "software" ],
            "ratings.1": { by: "xyz", rating: 3 }
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

