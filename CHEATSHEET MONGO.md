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

*Buscame el genero H y muéstrame solo el `primer apellido` con `PRETTY`*

`db.students.find({gender:"H"}, {lastname1:1, _id:0}).pretty()`


*BUSCAR A TODO*

`db.students.find()` o `db.students({})`

*Documentos de la colección de ESTUDIANTES donde el BIRTH_YEAR sea `mayor o igual` a 1990*

`db.students.find( {"birt_year": {$gte: 1990} })`

*Documentos de la colección de BOOKS donde el PUBLITACIONYEAR sea `menor o igual` a 2009*

`db.books.find( {"publicationYear": {$lte: 2009} })`

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

    ]
    {
```

**

**

**

**

**

**

**


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