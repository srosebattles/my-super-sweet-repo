// Write a function that takes a string as input,
// and returns a copy of that string reversed.
//
// remember that:
// - you can get and set characters in a string at
//   specific indices
//
//   i.e. 'abc'[2] // 'c'
//   i.e. 'abc'[3] = 'd' // 'abcd'
// - there is an Array.reverse() method (but not a
//   String.reverse() method)
// - use something other than
//
//      "abc".split('').reverse().join('') --> "cba"

//k, so, building a function here to reverse a stringy. . . erm, string
function reverse(stringy){

//so, we're doing as we did for Q2 and setting an empty object to hold the value we want. NM, not object, string. That takes care of those pesky errors.
  var backward = ""

//k, so here's the loop. It's going to go backwards through the string one character at a time until there are no characters left
  for(i = stringy.length - 1; i>=0; i-- ){
//gonna change the variable backward each time we go through the stringy, by adding whatever character we get this time through to what we already had for backward
    backward = backward + stringy[i]
  }
//return the final value of backward for our use
  return backward
}

console.log(reverse("happiness"))
console.assert(reverse('hello') === 'olleh')
console.assert(reverse('hello, world') === 'dlrow ,olleh')
