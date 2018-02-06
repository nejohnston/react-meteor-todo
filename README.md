# react-meteor-todo
 db.students.find({}) can add a query document into the brackets. important. you can query multiple fields also. query returns all related document data

 db.students.find().pretty() makes returned values pretty

 db.students.find({ cohort: { $in: [5,6] } }) looks for every document related to 5, 6

 db.students.find( { cohort: 6, passing: true}, {_id: 0, name: 1}) values called projections, directs mongo on what to give back

 var cursor = db.students.find() var is set to cursor, have to redeclare after every use of the variable

 db.students.updateMany({name: "bob"}, {$set: {passing: false}})

 db.students.updateOne({name: "mack"}, {$set: {cohort: 7, passing: true}}, {upsert: true})

 --drop -d starwars -c people people.json --jsonArray

 mongoimport --drop -d starwars -c people people.json --jsonArray

 mongoimport --drop -d adp -c people people.json --jsonArray

 db.people.find({"species.name": "Human", "homeworld.name": "Tatooine" }).count()

 db.people.find({"films": {$elemMatch: {$eq: "The Empire Strikes Back"}}}).count()

 db.people.find({height: {$gt: 170}}).count()

 db.people.find({"starships.name": /X-wing/}).pretty() forward slashes makes it so that it looks for the term in the field

 db.people.find({"species.name": "Human", mass: {$type: "number"}}, {_id: 0, name: 1, mass: 1})

 db.people.find({"species.name": "Human", mass: {$type: "number"}}, {_id: 0, name: 1, mass: 1}).skip(2).limit(4).sort({mass: -1}).pretty()

 sort, skip, limit
