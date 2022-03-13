

--    Buscar los estudiantes de género masculino (2895)

db.students.find( {gender: "H"}).count()

2895

--

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



--    Buscar los estudiantes de género femenino (348)

db.students.find( {gender: "M"}).count()

348

--

test> db.students.find( {gender: "M"}).limit(3)
[
  {
    _id: ObjectId("57694ec7dabba852cb0ca3f2"),
    name: 'Tania',
    lastname1: 'Zorrilla',
    lastname2: 'Muriel',
    gender: 'M',
    email: 'owarne000s@talk21.com',
    phone: '699.225.695',
    phone_aux: '926.999.621',
    birth_year: 1972
  },
  {
    _id: ObjectId("57694ec7dabba852cb0ca3fe"),
    name: 'Tamar',
    lastname1: 'Zaid-Kelani',
    lastname2: 'Abril',
    gender: 'M',
    email: 'girishvishwasjoshi@gmail.com',
    phone: '625.119.126',
    birth_year: 1991
  },
  {
    _id: ObjectId("57694ec7dabba852cb0ca402"),
    name: 'Nerina',
    lastname1: 'Yanes',
    lastname2: 'Acosta',
    gender: 'M',
    email: 'mgrahamhaulage@aol.com',
    phone: '925.529.265',
    birth_year: 1960
  }
]


--    Buscar los estudiantes nacidos en el año 1993 (97)

db.students.find( {birth_year: 1993}).count()

97

--

test> db.students.find( {birth_year: 1993}).limit(3)
[
  {
    _id: ObjectId("57694ec7dabba852cb0ca405"),
    name: 'Jaume',
    lastname1: 'Volkoff',
    lastname2: 'Adell',
    gender: 'H',
    email: 'kellybomaholly@hotmail.com',
    phone: '629.219.229',
    birth_year: 1993
  },
  {
    _id: ObjectId("57694ec7dabba852cb0ca420"),
    name: 'Daniel',
    lastname1: 'Vilaró',
    lastname2: 'Alberto',
    gender: 'H',
    email: 'lindsaytilston@yahoo.co.uk',
    phone: '619.296.222',
    birth_year: 1993
  },
  {
    _id: ObjectId("57694ec7dabba852cb0ca43b"),
    name: 'Josep Xavier',
    lastname1: 'Vicente',
    lastname2: 'Alonso',
    gender: 'H',
    email: 'bharatyphillips@hotmail.com',
    phone: '656.222.551',
    birth_year: 1993
  }
]


--    Buscar los estudiantes de género masculino y nacidos en el año 1993 (81)

db.students.find( {gender: "H", birth_year: 1993}).count()

81

--

db.students.find( {gender: "H", birth_year: 1993}).limit(3)

test> db.students.find( {gender: "H", birth_year: 1993}).limit(3)
[
  {
    _id: ObjectId("57694ec7dabba852cb0ca405"),
    name: 'Jaume',
    lastname1: 'Volkoff',
    lastname2: 'Adell',
    gender: 'H',
    email: 'kellybomaholly@hotmail.com',
    phone: '629.219.229',
    birth_year: 1993
  },
  {
    _id: ObjectId("57694ec7dabba852cb0ca420"),
    name: 'Daniel',
    lastname1: 'Vilaró',
    lastname2: 'Alberto',
    gender: 'H',
    email: 'lindsaytilston@yahoo.co.uk',
    phone: '619.296.222',
    birth_year: 1993
  },
  {
    _id: ObjectId("57694ec7dabba852cb0ca43b"),
    name: 'Josep Xavier',
    lastname1: 'Vicente',
    lastname2: 'Alonso',
    gender: 'H',
    email: 'bharatyphillips@hotmail.com',
    phone: '656.222.551',
    birth_year: 1993
  }

--    Buscar los estudiantes nacidos después del año 1990 (289)

db.students.find( {birth_year: { $gt: 1990} } ).count()

289

--    Buscar los estudiantes nacidos antes o en el año 1990 (2954)

db.students.find( { birth_year: { $lte: 1990 } } ).count()

2954

--    Buscar los estudiantes nacidos en la década de los 90 (387)

db.students.find( {
  $and: [
    { birth_year: { $gte: 1990} },
    { birth_year: { $lt: 2000} }
  ]
}).count()

387

> db.students.find( { birth_year: { $gte: 1990, $lt: 2000} } ).count()

387

--    Buscar los estudiantes nacidos en la década de los 80 (936)

db.students.find( 
  {
    $or: [ 
      {birth_year: { $gte: 1980} },
      {birth_year: { $lte: 1990}}
    ]
  }
  ).count()

--    Buscar los estudiantes de género femenino nacidos en la década de los 90 (48)

test> db.students.find({birth_year:{$gte: 1990, $lte:
1999},gender:"M"}).pretty().count()

--    Buscar los estudiantes de género masculino nacidos en la década de los 80 (851)

test> db.students.find({birth_year: {$gte: 1980, $lt: 1990}}).sort({birth_year:
1}).count()

--    Buscar los estudiantes que no han nacido en el año 1985 (3147)

test> db.students.find({birth_year: {$nin: [1985]}}).count()

--    Buscar aquellos estudiantes que hayan nacido en el año 1970, 1980 o 1990 (293)

test> db.students.find({birth_year: {$in: [1970,1980,1990]}}).count()

--    Buscar aquellos estudiantes que no hayan nacido en el año 1970, 1980 o 1990 (2950)

test> db.students.find({birth_year: {$nin: [1970,1980,1990]}}).count()

--    Buscar los estudiantes nacidos en año par (1684)

test> db.students.find({birth_year: {$mod: [2, 0]}}).count()

--    Buscar los estudiantes nacidos en año impar (1559)

test> db.students.find({birth_year: {$mod: [2, 1]}}).count()

--    Buscar estudiantes nacidos en año par de la década de los 70 que sean hombres (403)

test> db.students.find({birth_year: {$gte: 1970, $lt: 1980, $mod: [2, 0]}, gender:
"H"}).pretty().count()

--    Buscar los estudiantes que tengan teléfono auxiliar (679)

test> db.students.find({phone_aux: {$exists:true}}).count()

--    Buscar los estudiantes que no tengan teléfono auxiliar (2564)

test> db.students.find({phone_aux: {$exists:false}}).count()

--    Buscar los estudiantes que no tengan segundo apellido (421)

test> db.students.find({lastname2: {$exists:false}}).count()

--    Buscar los estudiantes que tengan teléfono auxiliar y solo un apellido (71)

test> db.students.find({phone_aux: {$exists:true},lastname2:{$exists:false}}).count()

--    Crea un nuevo documento en la colección, pero en lugar de utilizar el método insert() usad el método save(). ¿Hay alguna diferencia? Ahora crea otro documento, pero poniendo manualmente el _id. Y crea otro documento más, utilizando la última sentencia, cambiando algún campo (excepto el _id). ¿Qué ocurre? ¿Cuál es la diferencia entonces?

db.students.save( { item: "book", qty: 40 } )

test> db.students.save

--    Buscar los estudiantes cuyo email termine en .net (48)

test> db.students.find({email:/\.net$/}).pretty().count()

--    Buscar los estudiantes cuyo email termine en .org (16)

test> db.students.find({email:/\.org$/}).pretty().count()

--    Buscar los estudiantes cuyo teléfono empiece por 622 (201)

test> db.students.find({$or: [{phone:/^622/},{phone_aux:/^622/}]}).pretty().count()

--    Buscar los estudiantes cuyo dni empiece y termine por letra (244)

No se tiene que hacer

--    Buscar los estudiantes cuyo nombre empiece por vocal (760)

test> db.students.find({$or: [{name: /^A/}, {name: /^E/}, {name: /^I/}, {name: /^O/},
{name: /^U/}]}).pretty().count()

--    Buscar estudiantes cuyo nombre sea compuesto (470)

test> db.students.find({"name": /.+\s.+/})

--    Buscar los estudiantes con nombre más largo de 13 caracteres (138)

test> db.students.find({"name": /.{13,}/})

--    Buscar los estudiantes con 3 o más vocales en su nombre (705)

db.students.find({"firstname": /.*[aeiouàáèéìíòóùú].*[aeiouàáèéìíòóùú].*[aeiouàáèéìíòóùú].*[aeiouàáèéìíòóùú].*/i})
