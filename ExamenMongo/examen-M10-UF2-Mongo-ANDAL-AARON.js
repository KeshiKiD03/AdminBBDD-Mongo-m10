// Aaron Andal
// 2HISX - M10. Adm. BBDD
// Examen. UF2. MongoDB
// 14.03.22


// IMPORTAR
mongoimport --db restaurants --collection restaurants --file restaurants2.json


isx36579183@i11:~/Documents/m10/ExamenMongo$ mongoimport --db restaurants --collection restaurants --file restaurants2.json
2022-03-14T08:11:00.773+0100    connected to: mongodb://localhost/
2022-03-14T08:11:01.267+0100    25381 document(s) imported successfully. 0 document(s) failed to import.


// 1.- Mostra les puntuacions (score) del restaurant "Munchtime"

db.restaurants.find({"name": "Munchtime"},{"grades.score":1})

// OUTPUT

[
    {
      _id: ObjectId("622eea8487219d74c567b1c0"),
      grades: [
        { score: 22 },
        { score: 7 },
        { score: 22 },
        { score: 12 },
        { score: 10 },
        { score: 16 }
      ]
    },
    {
      _id: ObjectId("622eeb45c8321c5c3a23a5ad"),
      grades: [
        { score: 22 },
        { score: 7 },
        { score: 22 },
        { score: 12 },
        { score: 10 },
        { score: 16 }
      ]
    }
  ]  


// 2.- Mostra els carrers (només els carrers) on hi ha restaurants a Queens

restaurants> db.restaurants.find({"borough": "Queens"},{_id:0, "address.street":1})

// Limiten a 3

restaurants> db.restaurants.find({"borough": "Queens"},{_id:0, "address.street":1}).limit(3)
[
  { address: { street: 'Astoria Boulevard' } },
  { address: { street: 'Hillside Avenue' } },
  { address: { street: '20 Avenue' } }
]


// Quants n'hi ha?

restaurants> db.restaurants.find({"borough": "Queens"},{_id:0, "address.street":1}).count()

11322


// 3.- Mostra el nom dels restaurants que contenen la paraula "Bagel"

restaurants> db.restaurants.find({"name": /Bagel/})

// Comptar

restaurants> db.restaurants.find({"name": /Bagel/}).count()

498

// o

restaurants> db.restaurants.find({"name": {$regex: /Bagel/}}).count()

498

// 4. Mostra els restaurants de Manhattan que facin Pizza o Hotdogs 
// i que el nom tingui 3 paraules o més i que tinguin alguna critica amb score >30

restaurants> db.restaurants.find({
    borough: "Manhattan", 
    $or: 
    [
        {cuisine: "Pizza"}, 
        {cuisine: "Hotdogs"}
    ],
    $and:
    [
        {"grades.score": {$gt: 30}}
    ]
}).count()

54


// Amb group / aggregate


// 5. Mostra els restaurants de la "11 Avenue" de "Brooklyn".

// Mostra només el nom, el carrer i el num. 
// d'edificiOrdena’ls per nomEscriu la sentènciaQuants n’hi ha?

restaurants> db.restaurants.find(
    {"address.street": "11 Avenue", 
    borough: "Brooklyn"},
    {name: 1,
    "address.street": 1, 
    "address.building": 1, 
    _id: 0},
    {$sort: {name: 1}}).count()

26

// 6. Compta els restaurants de Brooklyn que no fan cuina "Japanese", "Chinese", "Thai"ni"Korean".

// PRIMER FILTRAR 

restaurants> db.restaurants.find(
    {
        $nor: [
            {
                cuisine: "Japanese",
                cuisine: "Chinese",
                cuisine: "Korean"
            }
        ]
    })

restaurants> db.restaurants.aggregate( [
    { $match: {
       $nor: [
        {
            cuisine: "Japanese",
            cuisine: "Chinese",
            cuisine: "Korean"
        }]
        }
    }, {
        $group: {
            _id: "$cuisine",
            cont: {$sum: 1}
        }
    },
    { $sort: {"_id": 1}}
])

...

{ _id: 'Afghan', cont: 28 },
{ _id: 'African', cont: 136 },
{ _id: 'American ', cont: 12374 },
{ _id: 'Armenian', cont: 80 },
{ _id: 'Asian', cont: 622 },
{ _id: 'Australian', cont: 32 },
{ _id: 'Bagels/Pretzels', cont: 336 },
{ _id: 'Bakery', cont: 1382 },
{ _id: 'Bangladeshi', cont: 72 },
{ _id: 'Barbecue', cont: 104 },
{
  _id: 'Bottled beverages, including water, sodas, juices, etc.',
  cont: 144
},
{ _id: 'Brazilian', cont: 52 },
{ _id: 'CafÃ©/Coffee/Tea', cont: 4 },
{ _id: 'Café/Coffee/Tea', cont: 2430 },
{ _id: 'Cajun', cont: 14 },
{ _id: 'Californian', cont: 2 },
{ _id: 'Caribbean', cont: 1314 },
{ _id: 'Chicken', cont: 820 },
{ _id: 'Chilean', cont: 2 },
{ _id: 'Chinese', cont: 4838 }
]
Type "it" for more

...

// Count no funciona en AGGREGATE


// 7.- Inserta un restaurant amb les dades que vulguis

db.restaurants.insertOne({
    address: {
        building: '4260',
        coord: [ -73.96805719999999, 40.7925587 ],
        street: 'Escola del Treball',
        zipcode: '08014'
      },
      price: 68,
      borough: 'Eixample',
      cuisine: 'Catala',
      grades: [
        {
          date: ISODate("2021-09-12T00:00:00.000Z"),
          score: 26
        },
        {
          date: ISODate("2020-08-28T00:00:00.000Z"),
          score: 9
        },
        {
          date: ISODate("2019-03-25T00:00:00.000Z"),
          score: 20
        },
        {
          date: ISODate("2018-02-14T00:00:00.000Z"),
          score: 12
        }
      ],
      name: 'Edt Fusion Mix',
      restaurant_id: '14753987'
})

// SAVE DEPRECATED

// MongoshInvalidInputError: Collection.save() is deprecated. Use insertOne, insertMany, updateOne, or updateMany.


{
    acknowledged: true,
    insertedId: ObjectId("622efa24b866289431ea777d")
}


restaurants> db.restaurants.find({"address.street": "Escola del Treball"})
[
  {
    _id: ObjectId("622efaa7b866289431ea777e"),
    address: {
      building: '4260',
      coord: [ -73.96805719999999, 40.7925587 ],
      street: 'Escola del Treball',
      zipcode: '08014'
    },
    price: 68,
    borough: 'Eixample',
    cuisine: 'Catala',
    grades: [
      { date: ISODate("2021-09-12T00:00:00.000Z"), score: 26 },
      { date: ISODate("2020-08-28T00:00:00.000Z"), score: 9 },
      { date: ISODate("2019-03-25T00:00:00.000Z"), score: 20 },
      { date: ISODate("2018-02-14T00:00:00.000Z"), score: 12 }
    ],
    name: 'Edt Fusion Mix',
    restaurant_id: '14753987'
  }
]




// 7.1.- Modifica el carrer a "Urgell" i el barri a "Eixample". 
// Incrementa el preu en 10.

// 1 Busquem el ID

restaurants> db.restaurants.find({"address.street": "Escola del Treball"},{_id: 1})
[ { _id: ObjectId("622efaa7b866289431ea777e") } ]


db.restaurants.updateOne({
    _id: ObjectId("622efaa7b866289431ea777e")
},
    {$set: {"address.street": "Urgell"}},
    {$inc: {price: 10}}   
)


{
    acknowledged: true,
    insertedId: null,
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 0
}

restaurants> db.restaurants.find({"address.street": "Urgell"})
[
  {
    _id: ObjectId("622efaa7b866289431ea777e"),
    address: {
      building: '4260',
      coord: [ -73.96805719999999, 40.7925587 ],
      street: 'Urgell',
      zipcode: '08014'
    },
    price: 78,
    borough: 'Eixample',
    cuisine: 'Catala',
    grades: [
      { date: ISODate("2021-09-12T00:00:00.000Z"), score: 26 },
      { date: ISODate("2020-08-28T00:00:00.000Z"), score: 9 },
      { date: ISODate("2019-03-25T00:00:00.000Z"), score: 20 },
      { date: ISODate("2018-02-14T00:00:00.000Z"), score: 12 }
    ],
    name: 'Edt Fusion Mix',
    restaurant_id: '14753987'
  }
]

// S'ha cambiat la direcció a Urgell i price de 68 a 78.


// 8.- Incrementa el preu de tots els restaurants de Manhattan en 10.

db.restaurants.updateMany({
    borough: "Manhattan"
},
    {$inc: {price: 10}} 
)

{
    acknowledged: true,
    insertedId: null,
    matchedCount: 20540,
    modifiedCount: 20540,
    upsertedCount: 0
  }
  

// 9. Busca el restaurant "Grassroot Tavern" i posa-li tipus de cuina "Cajun"

db.restaurants.find({name: "Grassroot Tavern"})

db.restaurants.updateMany({
    name: "Grassroot Tavern"
},
    {$set: {cuisine: "Cajun"}}
  
)


{
    acknowledged: true,
    insertedId: null,
    matchedCount: 2,
    modifiedCount: 2,
    upsertedCount: 0
}

]
restaurants> db.restaurants.find({name: "Grassroot Tavern"},{cuisine: 1})
[
  { _id: ObjectId("622eea8487219d74c567b1df"), cuisine: 'Cajun' },
  { _id: ObjectId("622eeb45c8321c5c3a23a5ca"), cuisine: 'Cajun' }
]

// 10.- Troba els restaurants que tenen alguna critica amb grade Z i alguna amb score<20

restaurants> db.restaurants.find({ $or: [{"grades.grade": "Z"},{ "grades.score": {$lt: 20}}]}).count()

48529


// 10.1.- Ara troba els que tenen una mateixa crí tica amb grade Z i score <20. (mira l’exemple deelemMatch o la documentació:


restaurants> db.restaurants.find({ $and: [{"grades.grade": "Z"},{ "grades.score": {$lt: 20}}]})

// O

restaurants> db.restaurants.find({"grades.grade": "Z", "grades.score": {$lt: 20}})

2412

// 11.- Busca els restaurants del Bronx

// Agrupa’ls per "cuisine", i per cada tipus de "cuisine" 
// calculael preu més altel preu més baixi quants n'hi ha.
// Ordena per "cuisine"Escriu la sentència

restaurants> db.restaurants.find({borough: "Bronx"})

restaurants> db.restaurants.aggregate( [
    { $match: {
        borough: "Bronx"
        }
    }, {
        $group: {
            _id: "$cuisine",
            max:{$max: "$price"},
            min:{$min: "$price"},
            cont: {$sum: 1}
        }
    },
    { $sort: {"_id": 1}}
])

// 12.- Busca quants restaurants hi ha a cada barri (borough). Ordena’ls de més a menys.

restaurants> db.restaurants.aggregate( [
{
    $group: {
        _id: "$borough",
        cont: {$sum: 1}
    }
    },
    { $sort: {"cont": -1}}
])

[
    { _id: 'Manhattan', cont: 20540 },
    { _id: 'Brooklyn', cont: 12182 },
    { _id: 'Queens', cont: 11322 },
    { _id: 'Bronx', cont: 4676 },
    { _id: 'Staten Island', cont: 1940 },
    { _id: 'Missing', cont: 102 },
    { _id: 'Eixample', cont: 1 }
]

// 13.- Quines puntuacions (score) diferents hi ha?

restaurants> db.restaurants.distinct("grades.score")
[
  null, -1, 0,  2,  3,   4,  5,  6,  7,  8,  9,  10,
  11,   12, 13, 14, 15,  16, 17, 18, 19, 20, 21, 22,
  23,   24, 25, 26, 27,  28, 29, 30, 31, 32, 33, 34,
  35,   36, 37, 38, 39,  40, 41, 42, 43, 44, 45, 46,
  47,   48, 49, 50, 51,  52, 53, 54, 55, 56, 57, 58,
  59,   60, 61, 62, 63,  64, 65, 66, 67, 68, 69, 70,
  71,   73, 75, 76, 77,  78, 79, 80, 81, 82, 84, 86,
  89,   90, 92, 98, 131
]
