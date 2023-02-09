let data=[5,6,7,8,9]
data.push(10)
data.pop()  

console.log(data)

data.shift() // will remove an element form left and shift elements left
console.log(data)

data.unshift(11)    // will add element on the left and shift everryting right
console.log(data)

console.log(data,data.splice(2,2))
// splice gives values after the index specified up till specified nos .. if nothing specified it gives all values

data.forEach((element)=>{
    console.log(element,element*2)
})