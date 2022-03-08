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