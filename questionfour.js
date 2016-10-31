// write a method names()
// which takes a string of
// comma-separated names
// (first and last) and then
// returns an object where each
// firstname is a key, and each
// lastname is a value
//
// i.e. names("George Washington, John Adams, Kanye West")
//   .. --> {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function names(str) {

  var peopleArray = str.split(", ")

  var describeSelf = {};



  for (i=0; i < peopleArray.length; i++) {

    var eachPerson = peopleArray[i]

    var eachName = eachPerson.split(" ")
    var firstName = eachName[0]
    var lastName = eachName[1]

    describeSelf[firstName] = lastName

  }

  return describeSelf

}


var results = names("George Washington, John Adams, Kanye West")
console.log(results)
console.assert(results.George === "Washington")
console.assert(results['John'] === "Adams")
console.assert(results['Kanye'] === "West")
