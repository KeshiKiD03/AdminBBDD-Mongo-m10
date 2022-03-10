/*
 *  exercicisIMDB.js
 *  
 */


// 1. Buscar las personas que sólo han actuado (no dirigido) (1909)

  db.people.find(
    {
      hasDirected: { $exists: false },
      hasActed: true
    }
  ).count()


// 2. Buscar las personas que sólo han dirigido (no actuado) (341)

  db.people.find(
    {
      hasDirected: true,
      hasActed: { $exists: false }
    }
  ).count()


// 3. Buscar las personas que han actuado y dirigido (20)


  db.people.find(
    {
      hasDirected: true,
      hasActed: true
    }
  ).count()


// 4. Buscar las personas que ni han actuado ni dirigido (29)

  db.people.find(
    {
      hasDirected: { $exists: false },
      hasActed: { $exists: false }
    }
  ).count()


// 5. Buscar las películas protagonizadas por Penelope Cruz (2)

  db.movies.find(
    {
      "actors.name": "Penelope Cruz"
    }
  ).count()

// 5.1.- Mostrar-ne els titols i els directors
db.movies.find(     {       "actors.name": "Penelope Cruz"     }, {name:1,"directors.name":1,"_id":0}   )


// 6. Insereix la peli següent amb el seu director i els seus 3 actors principals. http://www.imdb.com/title/tt1205489/?ref_=nm_flmg_act_3

db.movies.insert(
  {
    name: "Gran Torino",
    year: 2008,
    runtime: 116,
    actors: [ { id: "0000142", name: "Clint Eastwood" },  { id: "3057402", name: "Bee Vang" }, { "id": "3115704", "name": "Ahney Her" } ],
    director: [  { id: "0000142", name: "Clint Eastwood" } ]
  }
)


db.movies.insert(
  {
    name: "Gran Torino",
    year: 2008,
    runtime: 116,
    actors: [ { name: "Clint Eastwood" }, { name: "Bee Vang" }, { name: "Ahney Her" } ],
    director: [ { name: "Clint Eastwood" } ]
  }
)

// 7. Fer la consulta per mostrar les pel·lícules on Clint Eastwood surt com a actor i com a director. (3)


  db.movies.find (
    { "actors.name": "Clint Eastwood",  "directors.name": "Clint Eastwood" }
  ).pretty()

// 8. Mostra el titol de les pelis dirigides per James Cameron

db.movies.find(
    { "directors.name": "James Cameron" },
    { name: 1, _id:0 }
).pretty()


// 9. Mostra el titol de les pelis dirigides per James Cameron anteriors a l'any 2000

db.movies.find(
    {"directors.name": "James Cameron" ,  year: { $lt : 2000} },
    { name: 1, _id:0 ,year:1} 
)


// 10. Mostra els actors que participen a la pel·lícula Avatar

db.movies.find( 
    { name: "Avatar" },
    { "actors.name": 1, _id:0 } 
).pretty()

// 11. Nom dels actors que participen en alguna de les pel·lícules de James Cameron

db.movies.find(
    {"directors.name": "James Cameron" },
    { "actors.name":1,_id:0 } 
)

// 12. Dona d'alta la peli https://www.imdb.com/title/tt4846340/?ref_=fn_al_nm_1a sense posar els actors ni el director.

db.movies.insert(
  {
    name: "Hidden Figures",
    year: 2016,
    runtime: 127
  }
)
db.movies.find({name:"Hidden Figures"}).pretty()

// 12.1 Poseu-li rating: M02
db.movies.updateOne(
  {name: "Hidden Figures"},
  { $set : {rating : "M02"} }
)

// 12.2 Incrementa la durada en 10 min
db.movies.updateOne(
  {name: "Hidden Figures"},
  { $inc : {runtime : 10} }
)


db.movies.find({name:"Hidden Figures"}).pretty()

// 13. Afegeix els 4 primers actors (si feu scroll vertical, us surten a l'apartat Cast)

db.movies.updateOne(
  { name: "Hidden Figures" },
  {
    $set: { actors: [ { name: "Tarahi P. Henson" }, { name: "Octavia Spencer" }, { name: "Janelle Monae" }, { name: "Kevin Costner" } ] }
  }
)



// 14. Afegeix-te a tu com a director

db.movies.updateOne(
  { name: "Hidden Figures" },
  {
    $set: { directors: [ { name: "Jordi" } ] }
  }
)


// 15. Treu la clau de directors

db.movies.updateOne(
  { name: "Hidden Figures" },
  { $unset: { directors: { name: "Jordi" } } }
)

// 16. Torna a posar la clau de directors amb el valor Theodore Melfi.

db.movies.updateOne(
  { name: "Hidden Figures" },
  { $set: { directors: [ { name: "Theodore Melfi" } ] } }
)


// 17. Esborreu la peli

db.movies.remove(
  { name: "Hidden Figures" },
{
     justOne: true,
   }  
)

db.movies.find({name:"Hidden Figures"}).pretty()


//18. A totes les pelis del director George Lucas posar genre:"SW"
db.movies.find(   { "directors.name": "George Lucas" }, {name:1, genre:1} )

db.movies.updateMany(
  { "directors.name": "George Lucas" },
  { $set: {genre:"SW"} }
)

//18.0 Mostrar el nom i el gènere de totes les pelis de George Lucas

db.movies.find(   { "directors.name": "George Lucas" }, {name:1, genre:1} )



// 19. Pel·licules on han intervingut junts Kate Winslet i Leonardo Di Caprio. Mostrar titol peli i nom dels actors.

db.movies.find(
    { $and: [ { "actors.name": "Kate Winslet" }, { "actors.name": "Leonardo DiCaprio" } ] },
    { _id:0, name: 1, "actors.name": 1 }
).pretty()









// EXERCICIS AGGREGATE:

// 23. Busqueu les pelis posteriors al 2000
// Agrupeu-les per rating i per cada rating calculeu 
//			- la suma de "runtime"
// PREVIS:
db.movies.distinct("rating")
db.movies.distinct("genre")
db.movies.find({year: {$gt:2012}},{name:1})

db.movies.aggregate([ 
{$match: {year: {$gt:2000}}}, 
{$group: 
	{
	_id: "$rating", 
	total:{$sum: "$runtime"}
	}
} 
])



// 24. Busqueu les pelis posteriors al 2000
// Agrupeu-les per gènere i per cada gènere calculeu 
//			la suma de "runtime", la mitjana de "runtime" 
//			i quantes n'hi ha 
// ordeneu per gènere

db.movies.aggregate([
{$match: {year: {$gt:2000}}},
{$group: 
	{
	_id: "$genre", 
	total:{$sum: "$runtime"},
	avg:{$avg: "$runtime"},
	cont: {$sum:1}
	}
},
{$sort: {"_id":1}}  
])

// Volem saber quantes pelis ha fet cada director i quina durada mitjana tenen
// Volem llistar-les ordenant per nombre de pelis del director, començant pels que n'han fet més
// Només volem les pelis del S.XXI
db.movies.aggregate([
{$match: {year: {$gt:2000}}}, 
{$group: 
	{
	_id: "$directors", 
	cont: {$sum:1}
	durada_mitja: {$avg:$runtime}
	}
},
{$sort: {"cont":-1}}  
])


//-------------------------------------------------------------------------------
// update amb operador posicional $
//-------------------------------------------------------------------------------



Update operators ($set, $unset, $inc, $min...)
https://docs.mongodb.com/manual/reference/operator/update/

Mètode update clàssic:
https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/

$ (update): positional $ operator. I més:
https://docs.mongodb.com/manual/reference/operator/update/positional/
Veure'n exemples




// EXEMPLE update amb $
// 22. Canvieu el nom de Zoe Saldana a Avatar
// Busqueu-la per id

db.movies.find({name:"Avatar"}).pretty()
db.movies.updateOne(
   { name: "Avatar", "actors.id":"0757855"},
   { $set: { "actors.$.name" : "Zoe Saldanaaaa" } }
)




//-------------------------------------------------------------------------------
// elem Match
//-------------------------------------------------------------------------------
// EXERCICI AMB elemMatch

// 20. Busqueu les pelis on surt una noia que es diu Kate i és britànica (nationality: "British")

//Primer haureu de modificar alguns registres de la BD per tenir resultats:
//Modifiqueu els següents registres de la BD
db.movies.save({
  _id: "0120338",
  name: "Titanic",
  year: 1997,
  rating: "PG-13",
  runtime: 194,
  genre: "DR",
  earnings_rank: 2,
  actors: [
    { id: "0000138", name: "Leonardo DiCaprio" },
    { id: "0000701", name: "Kate Winslet", nationality: "British" },
    { id: "0000708", name: "Billy Zane" },
    { id: "0000870", name: "Kathy Bates" },
    { id: "0000200", name: "Bill Paxton" } ],
  directors: [
    { id: "0000116", name: "James Cameron" } ]
})


db.movies.save({
  _id: "0348150",
  name: "Superman Returns",
  year: 2006,
  rating: "PG-13",
  runtime: 154,
  genre: "AVYS",
  earnings_rank: 136,
  actors: [
    { id: "0746125", name: "Brandon Routh" },
    { id: "0098378", name: "Kate Bosworth" },
    { id: "0000228", name: "Kevin Spacey" },
    { id: "0005188", name: "James Marsden" },
    { id: "0000205", name: "Parker Posey", nationality: "British"  } ],
  directors: [
    { id: "0001741", name: "Bryan Singer" } ]
})

//SOLUCIÓ:

db.movies.find(
{"actors": { 
	$elemMatch:{ 
			nationality:"British", 
			name:/^Kate/ 
			}
		}
}).pretty()  


// El següent .find ens retorna les dues pel·lícules que hem modificat, perquè tenen una actriu que es diu Kate i una actriu britànica,
// però no ens assegurem que la Kate sigui la britànica!
db.movies.find(
	{
		"actors.nationality":"British", 
		"actors.name":/^Kate/ 
}).pretty()  







// EXERCICI AMB elemMatch

// 21.- TROBEU LES PELIS amb algun actor que es digui Brad i que tingui id<1000 (que és el Brad Pitt...) (3)
// FER-HO amb criteri sobre name i sobre id!!!
// Resultat: 3 pelis

// PREVIS
db.people.find({name:/^Brad/, hasActed:true })
//{ "_id" : "0000093", "name" : "Brad Pitt", "dob" : "1963-12-18", "pob" : "Shawnee, Oklahoma, USA", "hasActed" : true }
//{ "_id" : "0004951", "name" : "Brad Garrett", "dob" : "1960-4-14", "pob" : "Woodland Hills, California, USA", "hasActed" : true }
//{ "_id" : "0177896", "name" : "Bradley Cooper", "dob" : "1975-1-5", "pob" : "Philadelphia, Pennsylvania, USA", "hasActed" : true }

db.movies.find(
{
	"actors.id":{$lt:"0001000"},
	"actors.name":/^Brad/
}
).pretty()  //5 
// NO ÉS EL QUE VOLEM
// Aquest find retorna les pelis que tenen un actor que es digui brad i algun actor amb id<1000


// SOLUCIÓ:
db.movies.find(
{"actors": { 
	$elemMatch:{ 
			id:{$lt:"0001000"}, 
			name:/^Brad/ 
			}
		}
}).pretty()   //3







// Transacciones en MONGO

https://www.arquitectoit.com/mongodb/transacciones-en-mongodb/


¡MIRAR EL DOMINGO!

.save() -- Fa un insert si no existeix i fa un update si existeix

2 FINDS CON AGGREGATE -- EXAMEN REPASAR!!

db.movies.distinct("rating")

db.movies.distinct("genre")

.distinct("genre")




----------------------------------------------------------------------









