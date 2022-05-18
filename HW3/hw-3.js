# MongoDB HW

# Database name: restaurantsDB
# Collection name: restuarantsC

# Implemented on MongoDB Atlas and Compass

// 1. Count the number of documents in the collection.

db.restaurantsC.count()

// 2. Display all the documents in the collection.

db.restaurantsC.find()

// 3. Display: restaurant_id,name,borough and cuisine for all thedocuments.

db.restaurantsC.find({}, {_id:1, name:1, cuisine: 1, borough: 1, restaurant_id: 1})

// 4. Display:restaurant_id,name,borough and cuisine, but exclude field_id,for all the documents in the collection.

db.restaurantsC.find({}, {_id:0, name:1, cuisine: 1, borough: 1, restaurant_id: 1})

// 5. Display:restaurant_id,name,borough and zipcode,exclude the field_id for all the documents in the collection.

db.restaurantsC.find({}, {_id:0, name:1, cuisine: 1, borough: 1, restaurant_id: 1, "address.zipcode": 1})

// 6. Display all the restaurants in the Bronx.

db.restaurantsC.find({"borough" : "Bronx"})

// 7. Display the first 5 restaurants in the Bronx.

db.restaurantsC.find({"borough" : "Bronx"}).limit(5)

// 8. Display the second 5 restaurants (skipping the first 5) in the Bronx.

db.restaurantsC.find({"borough" : "Bronx"}).skip(5).limit(5)

// 9. Find the restaurants with a score more than 85.

db.restaurantsC.find({"grades.score" : {"$gt" : 85}})

// 10. Find the restaurants that achieved a score, more than 80 but less than 100.

db.restaurantsC.find({$and : [{"grades.score" : {"$gt" : 80}}, {"grades.score" : {"$lt" : 100}}]})

// 11. Find the restaurants which locate in latitude value less than -95.754168.

db.restaurantsC.find({"address.coord.0" : {$lt : -95.754168}})

// 12. Find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168.

db.restaurantsC.find({$and : [{"cuisine" : {$ne : "American "}}, {"address.coord.0" : {$lt : -65.754168}}, {"grades.score" : {$gt : 70}}]})

// 13. Find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than - 65.754168. (without using $and operator).

db.restaurantsC.find({"cuisine" : {$ne : "American "}, "address.coord.0" : {$lt : -65.754168}, "grades.score" : {$gt : 70}})

// 14. Find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' and not in the borough of Brooklyn, sorted by cuisine in descending order.

db.restaurantsC.find({$and : [{"cuisine" : {$ne : "American "}}, {"grades.grade" : "A"}, {"borough" : {$ne : "Brooklyn"}}]}).sort({cuisine : -1})

// 15. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.

db.restaurantsC.find({"name" : { $regex: /^Wil.*/}}, {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

// 16. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.

db.restaurantsC.find({"name" : { $regex: /.*ces$/}}, {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

// 17. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.

db.restaurantsC.find({"name" : { $regex: /Reg/}}, {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

// 18. Find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish.

db.restaurantsC.find({borough: "Bronx", cuisine: {$in: ["American ","Chinese"]}}, {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

// 19. Find the restaurant Id, name, borough and cuisine for those restaurants which belong to the boroughs of Staten Island or Queens or Bronx or Brooklyn.

db.restaurantsC.find({$or: [{"borough": "Staten Island"}, {"borough": "Bronx"}, {"borough": "Brooklyn"}, {"borough": "Queens"}]}, {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

// 20. Find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronx or Brooklyn

db.restaurantsC.find({borough: {$nin: ["Staten Island","Queens","Bronx","Brooklyn"]}} , {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

// 21. Find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score below 10.

db.restaurantsC.find({"grades.score": {$lt: 10}}, {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

// 22. Find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinese' or restaurant's name begins with letter 'Wil'.

db.restaurantsC.find({$nor: [{cuisine: {$in: ["American ","Chinese"]}},{name: /^Wil.*/}]},{_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

// 23. Find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates.

db.restaurantsC.find({"grades" : {$elemMatch: {"date": ISODate("2014-08-11T00:00:00Z"), "grade":"A", "score":11}}}, {_id:0, restaurant_id:1, name:1, grades:1})

// 24. Find the restaurant Id, name and grades for those restaurants where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".

db.restaurantsC.find({$and: [{"grades.1.grade":"A"}, {"grades.1.score": 9}, {"grades.1.date": ISODate("2014-08-11T00:00:00Z")}]},{_id:0, restaurant_id:1, name:1, grades:1})

// 25. Find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and up to 52.

db.restaurantsC.find({$and : [{"address.coord.1": {$gt : 42}},{"address.coord.1": {$lte : 52}}]}, {_id:0, restaurant_id:1, name:1, address:1})



# Database name: historyDB
# Collection name: historyC

// EC1. 

db.historyC.aggregate([{$group : {_id:"$date", count:{$sum:1}}},{$sort: {count:1}}])



