// CHEATSHEET MONGODB FAST EXAMEN

// INSERTMANY

db.prova.insertMany([
{ item: "journal",qty: 25,size: { h: 14, w: 21, uom: "cm" },status: "A" },
{ item: "notebook",qty: 50,size: { h: 8.5, w: 11, uom: "in" },status: "A" },
{ item: "paper",qty: 100,size: { h: 8.5, w: 11, uom: "in" },status: "D" },
{ item: "planner",qty: 75,size: { h: 22.85, w: 30, uom: "cm" },status: "D" },
{ item: "postcard",qty: 45,size: { h: 10, w: 15.25, uom: "cm" },status: "A" }
])

// UPDATEMANY

// REMOVEMANY

// REMOVE

db.inventory.remove({})

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