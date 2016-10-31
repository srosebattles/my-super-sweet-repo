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


function letterCount(stringOne){
    if(typeof stringOne === "undefined" ){
      return {}
    }
    var stringTwo = stringOne.toLowerCase()
    var counts = {};

    for (i = 0; i <= stringTwo.length; i++) {

      var letter = stringTwo.charAt(i)



      if(counts[letter]) {
        counts[letter] = 1 + counts[letter]
      } else {
        counts[letter] = 1
      }

    }
console.log(counts)
return counts
}



// tests

console.assert(letterCount("abcabcabcdefab c a oo ija ;a ;skmdals kn").b === 4)
console.assert(letterCount().z === undefined)
