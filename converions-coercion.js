// type conversion and type coercion
let num =8;
console.log(num, typeof num)
let num1=String(num)
console.log(num1,typeof num1)
let str ="123"
let str1=Number(str)
console.log(str1, typeof str1)

let x 
console.log(typeof x)
x=9
console.log(typeof x)
x=x+"a"
console.log(typeof x)

// coercion means when we add two data types which one should be the resultant one

x=x-2
console.log(x,typeof x)

let y= parseInt('123 abhishek')
// parse int will convert a string into numbers , it will ignore all the letters after it incounters one
console.log(parseInt('123 abhishek'))
// but
console.log(parseInt('n123 abhishek'))