// function toTheMoon(x,y){
//   if (x > y) {
//   return x
//   }
//   else {
//   return y}
// }
//
// console.assert(toTheMoon(3,7)===7)
// console.assert(toTheMoon(7,3)===7)
//
// function soLow(x,y){
//   if (x > y),{
//     return y
//   }
//   else {
//     return x
//   }
// }
//
// console.assert(soLow(3,7)===3)
// console.assert(soLow(7,3)===3)
//
// function muchOrder(x,y){
//   if (x > y) {
//     return [x , y]
//   }
//   else {
//     return [y, x]
//   }
//   console.assert(muchOrder(3,7)===[3,7])
//   console.assert(muchOrder(8,5)===[8,5])
// }

// Write a function letterCount() that takes a
// string and returns an object with the count
// of each letter that is in the string.
//
// An example:
//
// letterCount("hello world")
//
// --> {
//      h: 1,
//      e: 1,
//      l: 3,
//      o: 2,
//      w: 1,
//      r: 1,
//      d: 1
// }
//
// Note that the space is not counted. All
// letters should also be converted to lower
// case when counting them.



//for loop i < string.length
//[] or charAt
//if else
//object to hold counts
//typeOf str === 'undefined'


//so, this is the function we're creating to count the occurences of each character in the string
function letterCount(stringOne){
  //this if statement is checking if there's nothing in the string, so the function doesn't try to find letters in nothing
    if(typeof stringOne === "undefined" ){
      return {}
    }
    //making it all lowercase so it doesn't count upper/lowercase seperately
    var stringTwo = stringOne.toLowerCase()
    //this is an object that is empty right now. As the loop runs it will store the value for occurences of each character
    var counts = {};
//this is the loop, which we've told to start at the beginning of the string and go to the end (however long it is) one letter at a time
    for (i = 0; i <= stringTwo.length; i++) {
//so, each time the loop goes through it will look at the character it's on and put it in the variable 'letter'
      var letter = stringTwo.charAt(i)


//this if statement says that if we see a letter again, add 1 to the value of counts[letter]- otherwise, set  (initialize) it to one
      if(counts[letter]) {
        counts[letter] = 1 + counts[letter]
      } else {
        counts[letter] = 1
      }

    }
    //printy the results to the console
console.log(counts)
//return the final values for our use
  return counts
}



// tests

console.assert(letterCount("abcabcabcdefab c a oo ija ;a ;skmdals kn").b === 4)
console.assert(letterCount().z === undefined)
