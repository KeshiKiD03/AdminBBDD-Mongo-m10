-- Exercicis amb datasets IMDB

/* * exercicisIMDB.js *
*/

db.imdb.find()

-- 1. Buscar las personas que sólo han actuado (no dirigido) (1909)

db.people.find({hasActed:true,hasDirected:{$exists:false}}).pretty().count()

-- 2. Buscar las personas que sólo han dirigido (no actuado) (341)

db.people.find({hasDirected:true,hasActed:{$exists:false}}).pretty().count()

-- 3. Buscar las personas que han actuado y dirigido (20)

db.people.find({hasDirected:true,hasActed:true}).pretty().count()

-- 4. Buscar las personas que ni han actuado ni dirigido (29)

db.people.find({hasDirected:{$exists:false},hasActed:{$exists:false}}).pretty().count()

-- 5. Buscar las películas protagonizadas por Penelope Cruz (2)

db.movies.find({"actors.name": "Penelope Cruz"}).count()

-- 5.1.- Mostrar-ne els titols i els directors

db.movies.find({"actors.name":"Penelope Cruz"}, {name:1, "directors.name": 1})

-- 6. Insereix la peli següent amb el seu director i els seus 3 actors principals. http://www.imdb.com/title/tt1205489/?ref_=nm_flmg_act_3

db.movies.insertOne({name: 'Gran Torino NEW', actors: [{name: 'Clint Eastwood'}, {name:
'Bee Vang'}, {name: 'Christopher Carley'}]})

-- 7. Fer la consulta per mostrar les pel·lícules on Clint Eastwood surt com a actor i com a director. (3)

db.movies.find({"actors.name": 'Clint Eastwood'}, {"directors.name": 'Clint
Eastwood'}).count()

-- 8. Mostra el titol de les pelis dirigides per James Cameron

db.movies.find({"directors.name": 'James Cameron'}).count()

-- 9. Mostra el titol de les pelis dirigides per James Cameron anteriors a l'any 2000

db.movies.find({"directors.name": 'James Cameron', year: {$lt: 2000}}).count()

-- 10. Mostra els actors que participen a la pel·lícula Avatar

db.movies.find({"name": 'Avatar'},{"actors.name":1})

-- 11. Nom dels actors que participen en alguna de les pel·lícules de James Cameron

db.movies.find({"directors.name": 'James Cameron'},{"actors.name":1})

-- 12. Dona d'alta la peli https://www.imdb.com/title/tt4846340/?ref_=fn_al_nm_1a sense posar els actors ni el director.

db.movies.insertOne({name: 'Hidden Figures', year: 2016, rating: 'PG-13', runtime: 127,
genre: 'BDH'})

-- 12.1 Poseu-li rating: M02

db.movies.updateOne({ name: 'Hidden Figures' }, { $set: { rating: 'M02' }})

-- 12.2 Incrementa la durada en 10 min

db.movies.updateOne({_id: ObjectId(" 62273a2480f2f183104c9292 ")}, {$inc: {runtime: 10}})

-- 13. Afegeix els 4 primers actors (si feu scroll vertical, us surten a l'apartat Cast)

db.movies.updateOne( {_id: ObjectId(" 62273a2480f2f183104c9292 ")}, { $set:{actors:["Taraji P. Henson","Octavia Spencer ","Janelle Monáe ", "Kevin Costner"] }})

-- 14. Afegeix-te a tu com a director

db.movies.updateOne({"name":"Hidden Figures"}, {$set:{"directors.name":"Ruben
Rodriguez","directors.id": '1'}})

-- 15. Treu la clau de directors

db.movies.find({"name":"Hidden Figures"},{"directors.id":'1'})

-- 16. Torna a posar la clau de directors amb el valor Theodore Melfi.

db.movies.updateOne({"name":"Hidden Figures"}, {$set:{"directors.name": "Theodore Melfi"}})

-- 17. Esborreu la peli

db.movies.deleteOne({_id: ObjectId("62273a2480f2f183104c9292")})

-- 18. A totes les pelis del director George Lucas posar genre:"SW"

db.movies.updateMany({'directors.name': 'George Lucas'}, {$set: {genre: 'SW'}})

-- 18.0 Mostrar el nom i el gènere de totes les pelis de George Lucas

db.movies.find({'directors.name': 'George Lucas'}, {name: 1, genre: 1})

-- 19. Pel·licules on han intervingut junts Kate Winslet i Leonardo Di Caprio. Mostrar titol peli i nom dels actors.

db.movies.find({'actors.name': { $all: ['Kate Winslet', 'Leonardo DiCaprio']}}, {name: 1,
'actors.name': 1})
