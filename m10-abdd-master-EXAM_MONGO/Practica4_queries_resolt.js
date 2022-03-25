edx.students
1) Estudiants de gènere masculí nascuts al 1993 (81)
 db.students.find({“birth_year": 1993}) 
 db.students.find({“birth_year": 1993}).count() 
 db.students.count({“birth_year": 1993})

2) Estudiants nascuts a la dècada dels 80 (936)

db.students.find({$and: [{gender: “H"},{birth_date: {$gte: 1980}},
{birth_date: {$lt: 1990}}]})
> db.students.find({"gender": “H", "birth_year": {"$gte": 1980, "$lt": 1990}})
> db.students.find({"$and": [{"gender": “H"},
{"birth_year": {"$gte": 1980, "$lt": 1990}}]})


3) Estudiants de gènere femení nascuts a la dècada dels 90 (48)

db.students.find({$and: [{gender: "M"},{birth_date: {$gte: 1990}},
{birth_date: {$lt: 2000}}]})

db.students.find({"gender": "M", "birth_year": {"$gte": 1990, "$lt": 2000}})


db.students.find({"$and": [{"gender": "M"},
{"birth_year": {"$gte": 1990, "$lt": 2000}}]})

4) Estudiants que no hagin nascut l'any 1985 (3147)
db.students.find({"birth_year": {"$ne": 1985}})

5) Estudiants nascuts el 1970, 1980 o 1990 (293)
 db.students.find({"birth_year": {"$in": [1970, 1980, 1990]}})


6) Estudiants no nascuts el 1970, ni el 1980, ni el 1990 (2950)
db.students.find({"birth_year": {"$nin": [1970, 1980, 1990]}})

7) Estudiants nascuts un any parell (1684)

db.students.find({"birth_year": {"$mod": [2,1]}})

8) Estudiants nascuts un any inparell de la dècada dels 70 i de gènere femení (403)
db.students.find({gender: “H”, birth_year: {$mod:[2,0], $gte: 1970, $lt: 1980}})
> db.students.find({"$and": [{"gender": "H"},
{"birth_year": {"$mod": [2, 0], "$gte": 1970, "$lt":
1980} }]})
> db.students.find({$and: [{gender:"H"},{birth_year: {$mod:[2,0]}},
{birth_year: {$gte:1970}},{birth_year: {$lt:1980}}]})


9) Estudiants amb un @mail que acabi en .net (47)
db.students.find({"email": /\.net$/i}) 
db.students.find({"email": /\.net$/i}).count()

10)Estudiants amb un @mail que acabi en .org (16)
db.students.find({"email": /\.org$/i}) 
db.students.find({"email": /\.org$/i}).count()

11)Estudiants amb DNI que comenci i acabi en lletra (244)
 db.students.find({"dni": /^[A-Z].*[A-Z]$/i})
 
12)Estudiants amb un nom que comenci per vocal (amb tots els accesnts possibles) (760)
db.students.find({“name": /^[aeiouàáèéìíòóùú]{1}/i})


13)Estudiants amb un nom compost (470)
db.students.find({"name": /.+\s.+/}) 
db.students.find({"name": /\s/}, {"name": true}

14)Estudiants amb un nom de més de 13 caràcters (138)
db.students.find({"name": /.{13,}/}) 
db.students.find({$where: "this.name.length >= 13"}).count()

15)Estudiants amb 2 o més vocals en els seu nom (705)
db.students.find({"firstname": /.*[aeiouàáèéìíòóùú].*[aeiouàáèéìíòóùú].*/i})
edx.bios

16)Desenvolupadors que hagin fet contribucions en OOP (2)
17)Desenvolupadors que hagin fet contribucions en OOP o Java (3)
18)Desenvolupadors que hagin fet contribucions en OOP i Simula (2)









