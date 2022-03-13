## Exercicis amb datasets IMDB

## /* * exercicisIMDB.js * */

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