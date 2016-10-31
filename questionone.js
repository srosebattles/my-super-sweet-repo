
// write a function randomInRange(a,b)
// that returns a random number between a and b
//
// note: Math.random() returns a float between 0 and 1


function randomInRange(a,b) {

//k, so we tell it to return a random number, but the default is between 0 and 1, so we need to multiply it by our variables to get in the range we want.
//if we multiply by b (our max), the most it can ever be is b because Math.random is going to be equal or less than 1
//Looks like this: return Math.random()*(b)
//but, how to get it to recognize the minimum?
//ok, I confess to googling. Here is MDN's answer: return Math.random()*(max -min) +min
//I think I understand what is going on here. The +min at the end means that if Math.random returns lowest possibility (0), we still get our min number.
//but to eliminate the possibility of that +min meaning that we go over the max value, we subtract it from the value we're multiplying by.
return Math.random()*(b-a) +a

//k, good, now I am getting negative numbers as well as positive for var y, which I wasn't before, and it's passing console.assert every time.
//this is a lot of commentary for one line of code. . .


}

var x = randomInRange(5,100)
console.log(x)
console.assert(x >= 5 && x <= 100)
var y = randomInRange(-25,30)
console.log(y)
console.assert(y >= -25 && y <= 30)
