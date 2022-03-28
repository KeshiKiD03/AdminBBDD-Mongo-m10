// CHEATSHEET MONGODB FAST EXAMEN

// INSERTMANY

db.prova.insertMany([
{ item: "journal",qty: 25,size: { h: 14, w: 21, uom: "cm" },status: "A" },
{ item: "notebook",qty: 50,size: { h: 8.5, w: 11, uom: "in" },status: "A" },
{ item: "paper",qty: 100,size: { h: 8.5, w: 11, uom: "in" },status: "D" },
{ item: "planner",qty: 75,size: { h: 22.85, w: 30, uom: "cm" },status: "D" },
{ item: "postcard",qty: 45,size: { h: 10, w: 15.25, uom: "cm" },status: "A" }
])


// UPDATEONE

db.movies.updateOne({
    name: 'Hidden Figures'
},
    {$set: {rating: 'M02'}})

// UPDATEMANY

db.movies.updateMany({'directors.name': 'George Lucas'}, {$set: {genre: 'SW'}})

// DELETEONE

db.movies.deleteOne({_id: ObjectId("6228e2a3c7de7acde7d7438d")})

// DELETEANY

db.myColl.deleteMany(
    { category: "cafe", status: "A" },
    { collation: { locale: "fr", strength: 1 } }
 )

// REMOVE BORRA COLECCIONES

db.inventory.remove({}) //todo

db.inventory.remove({ name: "Manel"}) // Los que tengan Manel

// EXEMPLES DE PROJECCIÓ:
//---------------------------------------------------------------------------

// RETORNA TOTS ELS CAMPS DELS DOCUMENTS QUE TENEN STATUS IGUAL A "A"
// SELECT * FROM inventory WHERE status = "A"
db.inventory.find( {status: "A"} )


// RETORNA NOMÉS ELS CAMPS ESPECIFICATS I L'ID
//Retorna documents amb item, status i id
// SELECT _id, item, status FROMinventory WHERE status = "A"
db.inventory.find( { status: "A" }, { item: 1, status: 1 } )


//RETORNA 2 CAMPS, PERÒ NO RETORNA L'ID
// SELECT item, status FROM inventory WHERE status = "A"
db.inventory.find( { status: "A" }, { item: 1, status: 1, _id: 0 } )




//------------------------------------------------------------------------
//------------------------------------------------------------------------


//Inventory Collection – Example 2
db.inventory.remove({});
db.inventory.insertMany([
{ item: "journal",qty: 25,size: { h: 14, w: 21, uom: "cm" },status: "A" },
{ item: "notebook",qty: 50,size: { h: 8.5, w: 11, uom: "in" },status: "A" },
{ item: "paper",qty: 100,size: { h: 8.5, w: 11, uom: "in" },status: "D" },
{ item: "planner",qty: 75,size: { h: 22.85, w: 30, uom: "cm" },status: "D" },
{ item: "postcard",qty: 45,size: { h: 10, w: 15.25, uom: "cm" },status: "A" }
]);

// EXEMPLES DE QUERY:
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// https://docs.mongodb.com/manual/reference/operator/query/

// RETORNA TOTS ELS REGISTRES DE LA COL.LECCIÓ
// SELECT * FROM inventory
db.inventory.find( {} ) // db.inventory.find()

// OPERADOR =
// Tots els registres amb status=D
// SELECT * FROM inventory WHERE status = "D”
db.inventory.find( { status: "D" } )

// OPERADOR $lt
// SELECT * FROM inventory WHERE qty < 30
db.inventory.find( { qty: { $lt: 30 } } )

// OPERADOR $in
// SELECT *FROM inventory WHERE status in ("A", "D")
db.inventory.find( { status: { $in: [ "A", "D" ] } } ) 

// OPERADOR $and
// SELECT * FROM inventory WHERE status = "A" AND qty < 30
db.inventory.find( { status: "A", qty:  {   $lt: 30 } } )

// OPERADOR $or
// SELECT * FROM inventory WHERE status = "A" OR qty < 30
db.inventory.find(
	{ $or: [
			{status: "A"},
			{qty: { $lt: 30 } } 
			]
	}
)

// OPERADOR $and i $or
// SELECT * FROM inventory WHERE status = "A" AND (qty< 30 OR item LIKE"p%")
db.inventory.find(
	{
		status: "A", 
		$or: [ 
				{ qty: { $lt: 30 } },
				{ item: /^p/ } 
				]
	}
)

// FER MATCHING AMB UN SUBDOCUMENT
// Buscar els elements que el subdocument que defineix la mida sigui exactament:
db.inventory.find(
	{
		size: { h: 14, 
				w: 21, 
				uom: "cm" 
				} 
	}
)

// EXEMPLE DE FER MATCHING AMB UN SUBCAMP
// Buscar els elements tals que la unitat de mesura (size.uom) és "in"
db.inventory.find(
	{
		"size.uom": "in"
	}
);
// COMETES OBLIGATÒRIES!!!!!!!!!

// EXEMPLE DE SUBDOCUMENT I QUERY OPERATORS:
// Buscar els elements tals que l'alçada (size.h) és > 15
db.inventory.find(
	{
		"size.h": { $lt: 15 }
	}
)

// EXEMPLE DE SUBDOCUMENT I OPERADOR $and
// Buscar els elements tals que l'status és "D", el subcamp alçada és menor que 15 i el subcamp unitats és "in" 
db.inventory.find(
	{
		"size.h": { $lt: 15 }, 
		"size.uom": "in", 
		status: "D" 
	}
)


// ------------------------------------------------------------------------
// EXEMPLES SOBRE ARRAYS
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

//Inventory Collection - 3
db.inventory.remove({})
db.inventory.insertMany([
{ item: "journal", qty: 25, colors: ["green", "red"], dim_cm: [ 14, 21 ] },
{ item: "notebook", qty: 50, colors: ["red", "green"], dim_cm: [ 14, 21 ] },
{ item: "paper", qty: 100, colors: ["red", "green", "plain"], dim_cm: [ 14, 21 ] },
{ item: "planner", qty: 75, colors: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
{ item: "postcard", qty: 45, colors: ["blue"], dim_cm: [ 10, 15.25 ] }
]);

// EXEMPLE DE FER MATCHING AMB TOT L'ARRAY
// Buscar els que tenen exactament els colors red i green i en aquest ordre
db.inventory.find( 
	{ 
		colors: ["red", "green"] 
	} 
)


// SI VOLEM ELS QUE TENEN RED I GREEN, PERÒ NO IMPORTA L'ORDRE:
db.inventory.find( { colors: { $all: ["red", "green"] }} )


// BUSCAR UN ELEMENT EN UN ARRAY
// Buscar els que tinguin el color vermell
db.inventory.find( { colors: "red" } )

// PER BUSCAR DINS DE L'ARRAY TAMBÉ PODEM FER SERVIR ELS QUERY OPERATORS
// Buscar tots els elements que l'array de dimensions conté algun element superior a 20
db.inventory.find( { dim_cm: { $gt: 20 } } ).pretty()

// FIND AMB CONDICIONS COMPOSTES:
db.inventory.find( { dim_cm: { $gt: 15, $lt: 20 } } )
// Aquesta query retorna els elements que a l'aray de dimensions tenen elements que satisfan les condicions.
// Pot ser que un element de l'array satisfaci les 2 condicions 20>x>15
// O pot ser q l'array tingui un element que satisfà la primera condició x>15 i un altre element la segona condició x<20

// FIND AMB CONDICIONS COMPOSTES SOBRE UN MATEIX ELEMENT
db.inventory.find( { dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } } } )
// Per assegurar-nos que les dues condicions es compleixen sibre un mateix element de l'array

// FIND SOBRE UN ELEMENT DE L'ARRAY PER POSICIÓ
db.inventory.find( {"dim_cm.1": { $gt: 25 } } )
// Retorna els documents que els segon element de l'array de dimensions és >25

// CONSULTAR UN ARRAY PER LA MIDA
db.inventory.find( { "colors": { $size: 3 } } )
// Retorna els documents q l'array de colors té 3 elements



-----------------


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
